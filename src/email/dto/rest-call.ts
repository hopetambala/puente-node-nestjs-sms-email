export interface RestCall {
  type: 'email';
  objectId:string;
  userFullName:string;
  emailSubject?: string;
  emailBody?: string;
  emailsToSendTo?: Array<string>;
}
