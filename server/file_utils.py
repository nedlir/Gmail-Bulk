import os

from config import UPLOADS_DIR


def save_cv_file(cv_file):
    if cv_file:
        cv_file_path = os.path.join(UPLOADS_DIR, cv_file.filename)
        cv_file.save(cv_file_path)
        return cv_file_path
    return None


def remove_file(file_path):
    if file_path and os.path.exists(file_path):
        os.remove(file_path)
