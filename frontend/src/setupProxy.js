

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'https://cryptic-eyrie-92448.herokuapp.com',
      changeOrigin: true,
    })
  );
};