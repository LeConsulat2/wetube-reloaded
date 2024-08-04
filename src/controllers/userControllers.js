// src/controllers/userControllers.js

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' });
};

export const postJoin = (req, res) => {
  res.end();
};

export const edit = (req, res) => {
  res.send('Edit User');
};

export const remove = (req, res) => {
  res.send('Remove User');
};

export const login = (req, res) => {
  res.send('Login User');
};

export const logout = (req, res) => res.send('Log out');

export const search = (req, res) => {
  res.send('Search User');
};
