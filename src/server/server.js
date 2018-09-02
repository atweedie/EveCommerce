import express from 'express';
import path from 'path';
import cookieParsrer from 'cookie-parser';
import router from './routes/eveCommerce';

const viewsDirectory = path.join(__dirname, '../app/views');

const app = express();

app.set('view engine', 'ejs');
app.set('views', viewsDirectory)

app.use(cookieParsrer())
app.use('/', router);

export function start() {
    app.listen(8080);
}

