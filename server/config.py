import os


# SMTP Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587

# File Upload Configuration
UPLOADS_DIR = 'uploads'

# CORS Configuration
CORS_ALLOWED_ORIGINS = ["http://localhost:5173"]

# Flask Configuration
DEBUG_MODE = True

# Create uploads directory if it doesn't exist
if not os.path.exists(UPLOADS_DIR):
    os.makedirs(UPLOADS_DIR)
