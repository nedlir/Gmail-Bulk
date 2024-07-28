import json


def validate_request_data(data):
    required_fields = ['sender_email', 'sender_password',
                       'contact_list', 'email_template', 'email_subject']
    return all(field in data and data[field] for field in required_fields)


def process_contact_list(contact_list):
    try:
        return json.loads(contact_list)
    except json.JSONDecodeError:
        return None
