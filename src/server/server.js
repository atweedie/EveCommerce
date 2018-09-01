import express from 'express';
import cookieParsrer from 'cookie-parser';
import router from './routes/eveCommerce';

const app = express();

app.set('view engine', 'ejs');

app.use(cookieParsrer())
app.use('/', router);

export function start() {
    app.listen(8080);
}

