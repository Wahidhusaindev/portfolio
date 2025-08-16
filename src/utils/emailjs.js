import emailjs from '@emailjs/browser';

export const sendEmail = (formRef) => {
  return emailjs.sendForm(
    'service_9nwyrqo',
    'template_sz8rwda',
    formRef.current,
    'b6gc55Io-uWHRkNhM'
  );
};
