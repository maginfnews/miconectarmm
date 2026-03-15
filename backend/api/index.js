// Vercel Serverless Function entry point
let handler;

module.exports = async (req, res) => {
  if (!handler) {
    const mod = require('../dist/serverless');
    handler = mod.default || mod;
  }
  return handler(req, res);
};
