export interface RestCall {
  type: 'email' | 'text';
  emailSubject?: string;
  emailBody?: string;
  emailsToSendTo?: Array<string>;

  textBody?: string;
  textTo?: string;
}
