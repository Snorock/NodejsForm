// require
//module. exports points to different func 
module.exports.index = function(req, res) {
    res.render('index', { title: 'Whatever' });
  }
module.exports.feedback = function(req, res) {
    res.render('feedback');
  }
  module.exports.thankyou = function(req, res) {
    res.render('thankyou');
  }