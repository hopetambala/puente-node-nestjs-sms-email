// const apiKey = process.env.MAILCHIMP_API_KEY
const mailchimp = (apikey: any) => require('@mailchimp/mailchimp_transactional')(apikey);

export const MAILCHIMP = () => mailchimp