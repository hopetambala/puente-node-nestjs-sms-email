const GLOBAL_API_KEY = "6_vgf1FY1Ai55a3bT7Axgg";
const mailchimp = require('@mailchimp/mailchimp_transactional')(GLOBAL_API_KEY);

export const MAILCHIMP = () => mailchimp
