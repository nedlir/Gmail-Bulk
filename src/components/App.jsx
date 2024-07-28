import React, { useState } from "react";
import GitHubButton from "react-github-btn";
import Title from "./Title";
import Button from "./Button";
import Contacts from "./Contacts";
import FileUpload from "./FileUpload";
import EmailSettings from "./EmailSettings";
import SMTPSettings from "./SMTPSettings";
import SendEmail from "./SendEmail";
import "../styles/App.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [activeComponent, setActiveComponent] = useState("contacts");
  const [contactList, setContactList] = useState([]);
  const [cvFile, setCvFile] = useState(null);
  const [emailDetails, setEmailDetails] = useState({
    senderEmail: "",
    emailSubject: "",
    emailTemplate: "",
  });
  const [smtpDetails, setSmtpDetails] = useState({
    smtpPassword: "",
  });

  const handleToggle = (component) => {
    setActiveComponent(component);
  };

  const handleContactAdded = (contact) => {
    setContactList((prev) => [...prev, contact]);
  };

  const handleContactRemoved = (email) => {
    setContactList((prev) => prev.filter((contact) => contact.email !== email));
  };

  const handleLetsGoClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowWelcome(false);
    }, 0.5);
  };

  if (showWelcome) {
    return (
      <div className={`welcome-screen ${fadeOut ? "fade-out" : ""}`}>
        <div className="welcome-content">
          <h1>Welcome to Bulk Gmail Sender</h1>
          <p>Send bulk emails using your Gmail account!</p>
          <Button onClick={handleLetsGoClick} className="lets-go-button">
            Let's Go!
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Title />
      <div className="navigation-buttons">
        <Button onClick={() => handleToggle("contacts")}>Add Contacts</Button>
        <Button onClick={() => handleToggle("file")}>Upload CV File</Button>
        <Button onClick={() => handleToggle("email")}>Compose Email</Button>
        <Button onClick={() => handleToggle("smtp")}>SMTP Setup</Button>
        <Button onClick={() => handleToggle("send")}>Bulk Send</Button>
      </div>

      {activeComponent === "contacts" && (
        <Contacts
          onContactAdded={handleContactAdded}
          contactList={contactList}
          onContactRemoved={handleContactRemoved}
        />
      )}
      {activeComponent === "file" && (
        <FileUpload onFileUploaded={setCvFile} cvFile={cvFile} />
      )}
      {activeComponent === "email" && (
        <EmailSettings
          emailDetails={emailDetails}
          onEmailDetailsUpdated={setEmailDetails}
        />
      )}
      {activeComponent === "smtp" && (
        <SMTPSettings
          smtpDetails={smtpDetails}
          onSmtpDetailsUpdated={setSmtpDetails}
        />
      )}
      {activeComponent === "send" && (
        <SendEmail
          contactList={contactList}
          emailDetails={emailDetails}
          smtpDetails={smtpDetails}
          cvFile={cvFile}
        />
      )}

      <div className="github-buttons-container">
        <GitHubButton
          href="https://github.com/nedlir"
          data-color-scheme="no-preference: dark; light: dark_dimmed; dark: light;"
          data-size="large"
          aria-label="Follow @nedlir on GitHub"
        >
          Follow @nedlir
        </GitHubButton>

        <GitHubButton
          href="https://github.com/nedlir/Gmail-Bulk"
          data-color-scheme="no-preference: light_high_contrast; light: dark_high_contrast; dark: dark_high_contrast;"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star Bulk Gmail Sender on GitHub"
        >
          Star
        </GitHubButton>
        <GitHubButton
          href="https://github.com/nedlir/Gmail-Bulk"
          data-color-scheme="no-preference: light_high_contrast; light: dark_high_contrast; dark: dark_high_contrast;"
          data-icon="octicon-repo-forked"
          data-size="large"
          aria-label="Fork nedlir on GitHub"
        >
          Fork
        </GitHubButton>
      </div>
    </div>
  );
}

export default App;
