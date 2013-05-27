
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Incredible' });
};

exports.about = function(req, res){
	res.render('index', { title: 'About Incredible'});
};
