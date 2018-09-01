import express from 'express';
import authCheck from '../middleware/authCheck';
import authorise from '../middleware/authorise';

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
    authorise,
    function (req, res, next) {
        res.send('Welcome Back!');
    }
);

export default router