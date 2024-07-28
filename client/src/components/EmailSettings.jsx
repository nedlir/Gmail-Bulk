import React, { useState } from "react";

import Input from "./Input";

import "../styles/protip.css";

function EmailSettings({ emailDetails, onEmailDetailsUpdated }) {
  const [emailBody, setEmailBody] = useState(emailDetails.emailTemplate || "");

  const handleSenderEmailChange = (event) => {
    onEmailDetailsUpdated({ ...emailDetails, senderEmail: event.target.value });
  };

  const handleEmailSubjectChange = (event) => {
    onEmailDetailsUpdated({
      ...emailDetails,
      emailSubject: event.target.value,
    });
  };

  const handleEmailBodyChange = (event) => {
    const newBody = event.target.value;
    setEmailBody(newBody);

    onEmailDetailsUpdated({
      ...emailDetails,
      emailTemplate: newBody,
    });
  };

  return (
    <div className="box">
      <h2>Email</h2>
      <Input
        type="email"
        value={emailDetails.senderEmail}
        onChange={handleSenderEmailChange}
        placeholder="Sender Email"
      />
      <Input
        type="text"
        value={emailDetails.emailSubject}
        onChange={handleEmailSubjectChange}
        placeholder="Email Subject"
      />

      <textarea
        value={emailBody}
        onChange={handleEmailBodyChange}
        placeholder="Email Template"
        style={{ minHeight: "100px" }}
      />

      <p className="protip">
        <strong>Pro Tip:</strong> Personalize your emails by addressing
        recipients their Contact name using curly braces.{" "}
        <code> Hello {`{name}`}</code> in the email template will render as{" "}
        <code>Hello nedlir</code> for a contact named nedlir.
      </p>
    </div>
  );
}

export default EmailSettings;
