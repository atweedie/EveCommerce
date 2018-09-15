import express from 'express';
import authCheck from '../middleware/authCheck';
import getEsiTokens from '../middleware/getEsiTokens';
import setTokenCookies from '../middleware/setTokenCookies';
import redirectEveSso from '../middleware/redirectEveSso';
import getCharacterInfo from '../middleware/getCharacterInfo'
import verifyAccessToken from '../middleware/verifyAccessToken';
import getCorporationInfo from '../middleware/getCorporationInfo';
import getBlueprintInfo from '../middleware/getBlueprintInfo';

const router = express.Router();

router.get(
    '/',
    authCheck,
    verifyAccessToken,
    getCharacterInfo,
    getCorporationInfo,
    getBlueprintInfo,
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
    getEsiTokens,
    setTokenCookies,
    function (request, response, next) {
        response.redirect('/');
    }
);

export default router