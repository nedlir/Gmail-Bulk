import os
from email import encoders
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import smtplib

# WARNING: This script uses an unsecure connection so it is NOT recommended for production use (and wasn't really developed for that purpose...)

# Email configuration
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SENDER_EMAIL = 'youremail@gmail.com'
SENDER_PASSWORD = 'your_app_password'  # Use an app password, not your account password
PDF_FILE_PATH = 'path_to_your_file.pdf'

contact_list = [
    {"name": "Contact1", "email": "contact1@example.com"},
    {"name": "Contact2", "email": "contact2@example.com"},
    {"name": "Contact3", "email": "contact3@example.com"}
]

def create_email(contact):
    message = MIMEMultipart()
    message['From'] = SENDER_EMAIL
    message['To'] = contact['email']
    message['Subject'] = 'Email Title'
    
    body = f"""
    Dear {contact['name']},
    
    I am reaching out through Gmail-Bulk.
    
    Best regards,
    Your Name
    """

    message.attach(MIMEText(body, 'plain'))
    
    # Attach the PDF file
    if os.path.exists(PDF_FILE_PATH):
        with open(PDF_FILE_PATH, 'rb') as attachment:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(attachment.read())
            encoders.encode_base64(part)
            part.add_header('Content-Disposition', f'attachment; filename={os.path.basename(PDF_FILE_PATH)}')
            message.attach(part)
    else:
        print(f"Warning: The file {PDF_FILE_PATH} does not exist and will not be attached.")
    
    return message

def send_email(contact):

    message = create_email(contact)

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, contact['email'], message.as_string())
        print(f"Email sent successfully to {contact['name']} at {contact['email']}")
    except smtplib.SMTPAuthenticationError:
        print("SMTP Authentication Error: Please check your email and password.")
    except smtplib.SMTPException as e:
        print(f"SMTP error occurred: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def main():
    for contact in contact_list:
        send_email(contact)

if __name__ == "__main__":
    main()