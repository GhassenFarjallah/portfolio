import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// Read EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

console.log('ENV Keys loaded:', {
  service: EMAILJS_SERVICE_ID ? '✓ set' : '✗ missing',
  template: EMAILJS_TEMPLATE_ID ? '✓ set' : '✗ missing',
  public: EMAILJS_PUBLIC_KEY ? `✓ set (starts with ${EMAILJS_PUBLIC_KEY.slice(0, 10)})` : '✗ missing',
});

// Initialize EmailJS at startup
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; severity: AlertProps['severity']; message: string }>({ open: false, severity: 'success', message: '' });

  const handleCloseSnackbar = (_: any, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbar((s) => ({ ...s, open: false }));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name === '' || email === '' || message === '') return;

    const templateParams = {
      to_email: 'ghassenfarjallah4@gmail.com',
      name: name,
      email: email,
      message: message,
      from_name: name,
    };

    setSending(true);
    emailjs.send(EMAILJS_SERVICE_ID as string, EMAILJS_TEMPLATE_ID as string, templateParams, EMAILJS_PUBLIC_KEY as string).then(
      (response) => {
        console.log('✓ Email sent successfully!');
        setSnackbar({ open: true, severity: 'success', message: 'Message sent successfully!' });
        setName('');
        setEmail('');
        setMessage('');
      },
      (error: any) => {
        console.error('✗ EmailJS Error:', error);
        console.error('Status:', error?.status);
        console.error('Text:', error?.text);
        const errorMsg = error?.text || error?.statusText || error?.message || 'Unknown error';
        setSnackbar({ open: true, severity: 'error', message: 'Error: ' + errorMsg });
      },
    ).finally(() => setSending(false));
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <form ref={form} noValidate autoComplete="off" className='contact-form' onSubmit={sendEmail}>
            <div className='form-flex'>
              <div className='form-group'>
                <label htmlFor='name'>Your Name</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={nameError ? 'error' : ''}
                />
                {nameError && <small className='error-text'>Please enter your name</small>}
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email / Phone</label>
                <input
                  id='email'
                  name='email'
                  type='text'
                  placeholder='How can I reach you?'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError ? 'error' : ''}
                />
                {emailError && <small className='error-text'>Please enter your email or phone number</small>}
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                placeholder='Send me any inquiries or questions'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={messageError ? 'error' : ''}
                rows={10}
              />
              {messageError && <small className='error-text'>Please enter the message</small>}
            </div>

            <Button variant="contained" endIcon={<SendIcon />} type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send'}
            </Button>
          </form>

          <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity={snackbar.severity}>
              {snackbar.message}
            </MuiAlert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;
