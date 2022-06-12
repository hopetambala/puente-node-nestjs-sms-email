const twilio = (accountSid, authToken) => require('twilio')(accountSid, authToken);

export const TWILIO = () => twilio
