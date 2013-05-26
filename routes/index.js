
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'First Year' });
};

exports.about = function(req, res){
	res.render('index', { title: 'About First Year'});
};