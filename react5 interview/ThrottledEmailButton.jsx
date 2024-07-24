import React, { useState, useCallback } from 'react';
import { throttle } from 'lodash';

const ThrottledEmailButton = () => {
    const [emailSent, setEmailSent] = useState(false);
  
    const sendEmail = () => {
      console.log('Email sent!');
      setEmailSent(true);
    };
  
    const throttledSendEmail = useCallback(throttle(() => {
      sendEmail();
    }, 2000), []); // 2000 milliseconds ka interval
  
    return (
      <button onClick={throttledSendEmail} disabled={emailSent}>
        Send Email
      </button>
    );
  };
  
  export default ThrottledEmailButton;