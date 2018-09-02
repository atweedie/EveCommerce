import getEsiAccessToken from '../services/getEsiAccessToken';
import esiAccessResponseHandler from '../services/esiAccessResponseHandler';

export default async function (request, response, next) {
    const authCode = request.query.code;

    const esiAccessResponse = await getEsiAccessToken(authCode);

    const {encryptedAccessToken, accessTokenExpiry, encryptedRefreshToken} = esiAccessResponseHandler(esiAccessResponse.data);

    response.locals.encryptedAccessToken = encryptedAccessToken;
    response.locals.accessTokenExpiry = accessTokenExpiry;
    response.locals.encryptedRefreshToken = encryptedRefreshToken;
        
    next();
}
