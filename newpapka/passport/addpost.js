var LocalStrategy   = require('passport-local').Strategy;
var Post = require('../models/post');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('addpost', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, post_name, done) {

            findOrCreatePost = function(){
                // find a user in Mongo with provided username
                
                Post.findOne({ 'post_name' :  post_name }, function(err, post) {
                    // In case of any error, return using the done method
                    if (err){
                        console.log('Error in Post: '+err);
                        return done(err);
                    }
                    // already exists
                    else {

                        // if there is no user with that email
                        // create the user
                        var newPost = new Post();
                        
                        // set the user's local credentials
                        newPost.post_name = post_name;
                        newPost.post_body = post_body;

                        // save the user
                        newPost.save(function(err) {
                            if (err){
                                console.log('Error in Saving post: '+err);  
                                throw err;  
                            }
                            return done(null, newPost);
                        });
                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(findOrCreateUser);
        })
    );

    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

}