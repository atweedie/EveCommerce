import express from 'express';
import path from 'path';
import cookieParsrer from 'cookie-parser';
import router from './routes/eveCommerce';

const viewsDirectory = path.join(__dirname, '../app/templates');
const staticsDirectory = path.join(__dirname, '../app/public');

const app = express();

app.set('view engine', 'pug');
app.set('views', viewsDirectory)

app.use(express.static(staticsDirectory));
app.use(cookieParsrer())
app.use('/', router);

export function start() {
    app.listen(8080);
}

