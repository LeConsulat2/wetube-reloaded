// src/controllers/userControllers.js
import User from '../models/User';

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' });
};

export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = 'Join';
  if (password !== password2) {
    return res.render('join', {
      pageTitle,
      errorMessage: 'Password confirmation does not match',
    });
  }

  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.render('join', {
      pageTitle,
      errorMessage: 'This username is already taken',
    });
  }

  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.render('join', {
      pageTitle,
      errorMessage: 'This email is already taken',
    });
  }

  // BELOW IS IF YOU WANT TO USE THE "OR" OPERATOR//
  // const exists = await User.exists({ $or: [{ username }, { email }] });
  // if (exists) {
  //   return res.render('join', {
  //     pageTitle,
  //     errorMessage: 'This username/email is already taken',
  //   });
  // }

  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect('/login');
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
