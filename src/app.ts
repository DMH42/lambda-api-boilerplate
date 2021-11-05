import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { loggerMiddleware } from './middleware/logger';
import { formatAPIResponse } from './util/util';
// import routeOne from './routes/routeOne';
// import mongoDB from './db/mongo';
import ResponseCodes from './constants/API_RES_CODES';


const app = express();
// mongoDB.connect();

// Middleware libraries
app.use(cors());
app.use((req, res, next) => {
  // res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// TODO: stop using bodyParser
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(loggerMiddleware);

// Our API routes
// app.use('/routeOne', routeOne);


// Default route in case no other route matches
app.get('*', (req, res) => {
  res
    .status(ResponseCodes.NOT_FOUND)
    .json(formatAPIResponse('Not Found'));
});

export default app;