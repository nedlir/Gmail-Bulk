import React from "react";

import Input from "./Input";

import "../styles/protip.css";

function SMTPSettings({ smtpDetails, onSmtpDetailsUpdated }) {
  const handleSmtpPasswordChange = (event) => {
    onSmtpDetailsUpdated({ ...smtpDetails, smtpPassword: event.target.value });
  };

  return (
    <div className="box">
      <h2>SMTP Setup</h2>
      <Input
        type="text"
        value={smtpDetails.smtpPassword}
        onChange={handleSmtpPasswordChange}
        placeholder="SMTP Password"
      />
      <p className="protip">
        <strong>Pro Tip:</strong> Generate SMTP app password from your&nbsp;
        <a
          href="https://myaccount.google.com/apppasswords"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Account App Passwords
        </a>
        .
      </p>
    </div>
  );
}

export default SMTPSettings;
