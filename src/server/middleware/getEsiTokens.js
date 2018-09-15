import crypto from 'crypto';
import logger from '../logger';
import config from '../../../config/local';
import getEsiAccessToken from '../services/getEsiAccessToken';
import esiAccessResponseHandler from '../services/esiAccessResponseHandler';

export default async function (request, response, next) {
    let token = request.query.code || request.cookies['esi_rtkn'];

    const isRefresh = Object.prototype.hasOwnProperty.call(request.cookies, 'esi_rtkn')

    if (isRefresh) {
        const secret = config.secretKey;
        const refreshKey = crypto.createDecipher('aes192', secret);

        token = refreshKey.update(token, 'hex', 'utf8');
        token += refreshKey.final('utf8');
    }

    try {
        const esiAccessResponse = await getEsiAccessToken(token, {'isRefresh': isRefresh});

        const {encryptedAccessToken, accessTokenExpiry, encryptedRefreshToken} = esiAccessResponseHandler(esiAccessResponse.data);

        response.locals.encryptedAccessToken = encryptedAccessToken;
        response.locals.accessTokenExpiry = accessTokenExpiry;
        response.locals.encryptedRefreshToken = encryptedRefreshToken;

        next();
    } catch(error) {
        logger.error(error.response.data);
        next(error);
    }
}
