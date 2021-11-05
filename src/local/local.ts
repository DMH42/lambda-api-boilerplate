
/* eslint-disable import/order */
/* eslint-disable import/first */
const dotenv = require('dotenv');

dotenv.config();
import logger from '../middleware/logger';
import app from '../app';
import { PORT } from '../config';

app.listen(PORT, () => logger.info(`listening on http://localhost:${PORT}`));