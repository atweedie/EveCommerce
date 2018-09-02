import getEsiAccessToken from '../services/getEsiAccessToken';
import esiAccessResponseHandler from '../services/esiAccessResponseHandler';

export default async function (request, response, next) {
    const authCode = request.query.code;

    const esiAccessResponse = await getEsiAccessToken(authCode);

    const {encryptedToken, tokenExpiry} = esiAccessResponseHandler(esiAccessResponse.data);

    response.locals.encryptedToken = encryptedToken;
    response.locals.tokenExpiry = tokenExpiry;
        
    next();
}
