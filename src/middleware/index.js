// eslint-disable-next-line no-unused-vars
module.exports = function (app) {  
  app.use(function(req, res, next) {
    req.feathers.fromMiddleware = req.ip; //adds ip to the request
    next();
  });
};
