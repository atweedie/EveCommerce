import express from 'express';
import authCheck from '../middleware/authCheck';
import makeEsiTokenRequest from '../middleware/makeEsiTokenRequest';
import setEsiCookie from '../middleware/setEsiCookie';
import redirectEveSso from '../middleware/redirectEveSso';
import makeCharacterInfoRequest from '../middleware/makeCharacterInfoRequest'
import verifyAccessToken from '../middleware/verifyAccessToken';

const router = express.Router();

router.get(
    '/',
    authCheck,
    verifyAccessToken,
    makeCharacterInfoRequest,
    function (request, response, next) {
        response.render('home');
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
    function (request, response, next) {
        response.redirect('/');
    }
);

export default router