const { login, register } = require('../services/authService');

const authController = require('express').Router();

authController.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login'
  });
});

authController.post('/login', async (req, res) =>{
    const result = await login(req.body.username, req.body.password);
    attachToken(req, res, result)
    res.redirect('/')
});
authController.get('/register', (req, res) => {
    res.render('register', {
      title: 'Register'
    });
  });

  authController.post('/register', async (req, res) =>{
     const result = await register(req.body.username, req.body.password);
     attachToken(req, res, result);
    res.redirect('/')
});

function attachToken(req, res, data){
    const token = req.signJwt(data);
    res.cookie('jwt', token, { maxAge: 14400000 });
}

module.exports = authController;