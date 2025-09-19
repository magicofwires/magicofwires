import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import emailjs from 'emailjs-com';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function openInNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    emailjs.sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAIL_JS_USER_ID)
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }