/*
 * What is happening here?
 * 
 * 1. Import SendGrid and config with API key
 *
 */

 /* 
  * TODO:
  * 
  * 1. Assemble email using payload passed in from orchestrator
  * 2. Send email using SendGrid
  * 
  */

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

module.exports = async function(context) {
  // TODO -- 1
  const msg = {}
  // TODO -- 2
  return msg;
};
