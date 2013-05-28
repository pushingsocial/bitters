
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Incredible' });
};

/*
* Get About Page.
*/

exports.about = function(req, res){
	res.render('index', { title: 'About Incredible'});
};

/*
* Get Book Page.
*/
exports.book=function(req, res){
	res.render('book', {title: 'Fable'});
};

