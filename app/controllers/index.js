// require
//module. exports points to different func 
module.exports.index = function(req, res) {
    res.render('index', { title: '' });
  }
module.exports.feedback = function(req, res) {
    let usern = req.session.login;
    res.render('feedback',{user: usern});
  }
  module.exports.thankyou = function(req, res) {
    res.render('thankyou');
  }