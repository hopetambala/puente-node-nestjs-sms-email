export interface RestCall {
  objectId: string;
  userFullName: string;
  emailSubject?: string;
  emailBody?: string;
  emailsToSendTo?: Array<string>;
  type: 'default' | 'signup' | 'passwordReset';
}
