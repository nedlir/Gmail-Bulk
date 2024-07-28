# Gmail-Bulk

Gmail-Bulk is a powerful tool for sending bulk emails using your Gmail account. It can help you get in touch with multiple potential leads, recruiters, etc.

With a React frontend and a Flask backend, this application provides a user-friendly interface for managing and sending mass emails efficiently.

## 🚀 Demo

Check out the live demo of Gmail-Bulk at [https://nedlir.github.io/Gmail-Bulk/](https://nedlir.github.io/Gmail-Bulk/)

## ⚠️ Disclaimer

Please use this app responsibly. Do not use it to spam or harass others. Remember what uncle Ben said, with great power comes great responsibility. Use this tool for good, to connect with others, to share valuable information and only to do good. Respect other people and treat their email box as you would like yours to be treated...

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (for React)
- Python 3.x (for Flask)
- Google account with SMTP access enabled

## 📦 Installation

#### Clone the repository:

```bash
git clone https://github.com/yourusername/Gmail-Bulk.git
cd Gmail-Bulk/client
```

### Setup Client (React)

1. Navigate to the client directory:

   ```
   cd client
   ```

2. Install the required npm packages:
   ```
   npm install
   ```

### Setup Server (Flask)

1. Navigate to the server directory:

   ```
   cd server
   ```

2. Create a virtual environment (optional but recommended):

   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```

## 🔐 SMTP Configuration

To use Gmail-Bulk, you need to set up an App Password for your Google account:

1. Go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Sign in to your Google account
3. Select "Mail" and "Other (Custom name)"
4. Enter a name for the app (e.g., "Gmail-Bulk")
5. Click "Generate"
6. Copy the generated 16-character password

You'll use this password in the application instead of your regular Google account password.

## 🚀 Running the Application

1. Start the Flask server:

   ```
   cd server
   python app.py
   ```

2. In a new terminal, start the React client:

   ```
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## 🔧 Usage

1. Upload your recipient list
2. Create your email template
3. Log in using your Gmail address and the App Password you generated earlier
4. Send your bulk emails

## 👨‍💻 Python Script version

This whole project started as a simple python script. Feel free to use it without all the fancy UI.

You can find the CLI version at [`./script/gmail-bulk.py`](./script/gmail-bulk.py).

## 🤝 Contributing

Contributions to Gmail-Bulk are welcome! Please feel free to submit issues, fork the repository and send pull requests!

## 📄 License

This project is licensed under the MIT License.
