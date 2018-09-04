import express from 'express';
import authCheck from '../middleware/authCheck';
import makeEsiTokenRequest from '../middleware/makeEsiTokenRequest';
import setEsiCookie from '../middleware/setEsiCookie';
import redirectEveSso from '../middleware/redirectEveSso';
import makeCharacterInfoRequest from '../middleware/makeCharacterInfoRequest'

const router = express.Router();

router.get(
    '/',
    authCheck,
    makeCharacterInfoRequest,
    function (req, res, next) {
        res.render('home');
    }
);

router.get(
    '/auth',
    redirectEveSso
);

router.get(
    '/esi',
    makeEsiTokenRequest,
    setEsiCookie,
    function (req, res, next) {
        res.redirect('/');
    }
);

export default router