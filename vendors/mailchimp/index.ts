const mailchimp = (apikey: any) => require('@mailchimp/mailchimp_transactional')(apikey);

export const MAILCHIMP = () => mailchimp