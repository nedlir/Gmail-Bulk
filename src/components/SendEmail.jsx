import React, { useState } from "react";
import Button from "./Button";
import "../styles/SendEmail.css";
import "../styles/protip.css";

function SendEmail({ contactList, emailDetails, smtpDetails, cvFile }) {
  const [sendStatus, setSendStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const isReadyToSend =
    contactList.length > 0 &&
    emailDetails.senderEmail &&
    emailDetails.emailSubject &&
    emailDetails.emailTemplate;

  const handleSendEmail = () => {
    setIsSending(true);
    setSendStatus("");

    // Simulate sending emails
    contactList.forEach((contact, index) => {
      setTimeout(() => {
        setSendStatus(`Sending an email to ${contact.email}... 🐱‍🏍`);
      }, index * 100); // Simulate a very short delay per email
    });

    setTimeout(() => {
      setSendStatus("Finished sending all emails! 💪");

      // Show demo message after a short delay
      setTimeout(() => {
        setSendStatus(
          (prevStatus) =>
            prevStatus +
            "\n\nThis is a demo version.\n For full functionality, please check the complete code in the GitHub repository: https://github.com/nedlir/Gmail-Bulk"
        );
        setIsSending(false);
      }, 500);
    }, contactList.length * 1000);
  };

  return (
    <div className="box bright-box">
      <h2>Ready to Bulk Send? ✨</h2>
      <Button
        onClick={handleSendEmail}
        disabled={!isReadyToSend || isSending}
        className="send-button"
      >
        Let's go!
      </Button>
      {sendStatus && (
        <p className="send-status" style={{ whiteSpace: "pre-line" }}>
          {sendStatus}
        </p>
      )}
    </div>
  );
}

export default SendEmail;
