import express from 'express';
import authCheck from '../middleware/authCheck';
import makeEsiTokenRequest from '../middleware/makeEsiTokenRequest';
import esiAccessResponseHandler from '../middleware/esiAccessResponseHandler';
import setEsiCookie from '../middleware/setEsiCookie';

const router = express.Router();

router.get(
    '/', 
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