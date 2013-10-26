
/*
 * GET users listing.
 */

exports.list = function(db){

	return function(req, res){
		console.log('here');
		var collection = db.get('users');
		collection.find({}, {}, function(e, users){
			console.log(users);
			res.render('users', {users: users});
		})
  	//res.send("respond with a resource");
	};
} 