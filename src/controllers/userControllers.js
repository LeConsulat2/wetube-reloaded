// src/controllers/userControllers.js
import User from '../models/User';
import bcrypt from 'bcrypt';

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' });
};

export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = 'Join';
  if (password !== password2) {
    return res.status(404).render('join', {
      pageTitle,
      errorMessage: 'Password confirmation does not match',
    });
  }

  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.status(404).render('join', {
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

  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect('/login');
  } catch (error) {
    return res.status(400).render('join', {
      pageTitle: 'Upload video',
      errorMessage: error._message,
    });
  }
};

export const getLogin = (req, res) => {
  res.render('login', { pageTitle: 'Login' });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = 'Login';
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render('login', {
      pageTitle,
      errorMessage: 'An account with this username does not exist',
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render('login', {
      pageTitle,
      errorMessage: 'Wrong password',
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect('/');
};

export const startGithubLogin = (req, res) => {
  const baseUrl = 'https://github.com/login/oauth/authorize';
  const config = {
    client_id: process.env.GH_CLIENT,
    allow_signup: false,
    scope: 'read:user user:email',
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const finishGithubLogin = async (req, res) => {
  const baseUrl = 'https://github.com/login/oauth/access_token';
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const userRequest = await (
      await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    console.log(userRequest);
  } else {
    return res.redirect("/login");
  }
};

export const edit = (req, res) => {
  res.send('Edit User');
};

export const remove = (req, res) => {
  res.send('Remove User');
};

export const logout = (req, res) => res.send('Log out');

export const search = (req, res) => {
  res.send('Search User');
};
