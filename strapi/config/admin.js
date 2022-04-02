module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '60185079f54f532021065c8740da9a4d'),
  },
});
