module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f715527502d8b0be49ee8f7811dda7cb'),
  },
});
