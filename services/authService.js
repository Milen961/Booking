 const bcrypt = require('bcrypt')
 const User = require('../models/User')

 async function register(username, password){
    // check if username is taken
   const existing = await User.findOne({username: { $regex: new RegExp(username), $options: 'i'} });
if (existing){
   throw new Error('Username is taken') 
}
   // hash password
  const hashedPassword = await bcrypt.hash(password, 10);
   
   // create and save user
   const user = await User.create({
        username,
        hashedPassword
    });
   // retunr user data 
    return {
        username,
        roles: user.roles
    }
  }
 

async function login(username, password){
  return new Promise((res, rej) => {
    if (username.toLowerCase() == 'peter' && password == '123456') {
        res({
            _id: '142121a2s1d5awds215',
            username: 'Peter',
            roles: ['user']
        });
    }else{
        rej(new Error('Incorrect username or password'))
    }
  });
}
module.exports = {
    register,
    login
};