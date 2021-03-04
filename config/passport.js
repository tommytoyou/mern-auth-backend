require('dotenv').config();
// A passport strategy for authenticating with a JSON Web Token
// This allows to authenticate endpoints using a token
// const JwtStrategy = require('passpot-jwt').Strategy;
// const ExtractJwt = require('passpot-jwt').ExtractJwt;

// import user
const { User } = require('../models/user');


const { Strategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');

const options = {};
options.jwtFromrequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = prosess.env.JWT_SECRET;


module.exports = (passport) => {
    // Add code here
    passport.use(new Strategy(options, (jwt_payload, done)=> {
        User.findById(jwt_payload.id)
        .then(user => {
            // jwt payload (an object that contains JWT info
            // done is a callback thatwe will be using to return user or false
            if (user) {
                // if a user is found, return done with null (for error)
                return done(null, user);
            } else {
                // no user was found
                return done(null, false);
            }
        })
        .catch(error => {
            console.log('===> Error below (passport,js)' );
            console.log(error);
        })

    }))
}