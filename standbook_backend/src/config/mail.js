export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe goBarber <noreply@gobarber.com>',
  },
};

/**
 * SMTP: protocolo de enviou por email
 * serviços de email
 * Amazon SES
 * Mailgun
 * Sparkpost
 * Mandril(mailchimp)
 * Mailtrap (para sistema de DEV)
 */
