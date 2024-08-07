import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import globalRouter from './routers/globalRouter';
import videoRouter from './routers/videoRouter';
import userRouter from './routers/userRouter';
import { localsMiddleware } from './middlewares';

// Debugging environment variables
console.log('DB_URL:', process.env.DB_URL);
console.log('COOKIE_SECRET:', process.env.COOKIE_SECRET);

const app = express();
const logger = morgan('dev');

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  }),
);

app.use(localsMiddleware);
app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

export default app;
