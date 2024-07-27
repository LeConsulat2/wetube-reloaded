import Video from '../models/Video';

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render('home', { pageTitle: 'Home', videos });
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  return res.render('watch', { pageTitle: `Watching`, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  return res.render('edit', { pageTitle: `Editing`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  await Video.findByIdAndUpdate(id, { title });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render('upload', { pageTitle: 'Upload Video' });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(',').map((word) => `#${word.trim()}`),
    });
    return res.redirect('/');
  } catch (error) {
    return res.render('upload', {
      pageTitle: 'Upload Video',
      errorMessage: error.message,
    });
  }
};
