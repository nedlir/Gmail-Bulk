import React, { useState } from "react";

import Button from "./Button";
import axios from "axios";

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

  const handleSendEmail = async () => {
    setIsSending(true);
    setSendStatus("");

    const formData = new FormData();
    formData.append("sender_email", emailDetails.senderEmail);
    formData.append("sender_password", smtpDetails.smtpPassword);
    formData.append("contact_list", JSON.stringify(contactList));
    formData.append("email_template", emailDetails.emailTemplate);
    formData.append("email_subject", emailDetails.emailSubject);

    if (cvFile) {
      formData.append("cv_file", cvFile);
    }

    try {
      for (const contact of contactList) {
        setSendStatus(`Sending an email to ${contact.email}... 🐱‍🏍`);
        await axios.post("http://localhost:5000/send-email", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      setSendStatus("Finished sending all emails! 💪");
    } catch (error) {
      console.error("Error sending email:", error);
      setSendStatus("Failed to send emails.");
    } finally {
      setIsSending(false);
    }
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
      {sendStatus && <p className="send-status">{sendStatus}</p>}
    </div>
  );
}

export default SendEmail;
