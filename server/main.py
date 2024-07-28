from flask import Flask, request, jsonify
from flask_cors import CORS

from email_utils import create_email_message, send_email
from file_utils import save_cv_file, remove_file
from data_validation import validate_request_data, process_contact_list
from config import CORS_ALLOWED_ORIGINS, DEBUG_MODE


app = Flask(__name__)
CORS(app, resources={r"/send-email": {"origins": CORS_ALLOWED_ORIGINS}})


@app.route('/send-email', methods=['POST'])
def send_email_route():
    if not validate_request_data(request.form):
        return jsonify({'error': 'All fields are required.'}), 400

    sender_email = request.form.get('sender_email')
    sender_password = request.form.get('sender_password')
    contact_list = process_contact_list(request.form.get('contact_list'))
    email_template = request.form.get('email_template')
    email_subject = request.form.get('email_subject')

    if contact_list is None:
        return jsonify({'error': 'Invalid contact list format.'}), 400

    cv_file_path = save_cv_file(request.files.get('cv_file'))

    for contact in contact_list:
        if 'email' not in contact:
            continue

        body = email_template.replace('{name}', contact.get('name', ''))
        message = create_email_message(
            sender_email, contact['email'], email_subject, body, cv_file_path)
        send_email(sender_email, sender_password, contact['email'], message)

    remove_file(cv_file_path)

    return jsonify({'message': 'Emails sent successfully'}), 200


if __name__ == '__main__':
    app.run(debug=DEBUG_MODE)
