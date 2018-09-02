import express from 'express';
import authCheck from '../middleware/authCheck';
import makeEsiTokenRequest from '../middleware/makeEsiTokenRequest';
import setEsiCookie from '../middleware/setEsiCookie';
import renderHomepage from '../middleware/renderHomepage';

const router = express.Router();

router.get(
    '/',
    renderHomepage
);

router.get(
    '/auth', 
    authCheck,
    function (req, res, next) {
        res.send('Authorised');
    }
);

router.get(
    '/callback',
    makeEsiTokenRequest,
    setEsiCookie,
    function (req, res, next) {
        res.redirect('/');
    }
);

export default router