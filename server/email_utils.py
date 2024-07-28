import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os

from config import SMTP_SERVER, SMTP_PORT


def create_email_message(sender_email, recipient_email, subject, body, cv_file_path):
    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = recipient_email
    message['Subject'] = subject

    body = body.replace('\n', '<br />')
    message.attach(MIMEText(body, 'html'))

    if cv_file_path and os.path.exists(cv_file_path):
        with open(cv_file_path, 'rb') as attachment:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(attachment.read())
            encoders.encode_base64(part)
            part.add_header(
                'Content-Disposition', f'attachment; filename={os.path.basename(cv_file_path)}')
            message.attach(part)

    return message


def send_email(sender_email, sender_password, recipient_email, message):
    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, recipient_email, message.as_string())
        return True
    except Exception as e:
        print(f"Failed to send email to {recipient_email}: {e}")
        return False
