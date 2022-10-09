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
    login
};