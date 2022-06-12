interface Recipients {
  email: string;
  type: string | 'to';
}

export interface Message {
  from_email: string;
  subject: string;
  text: string;
  to: Array<Recipients>;
}

export interface RestPostCall {
  emailSubject: string;
  emailBody: string;
  emailsToSendTo: Array<string>;
}
