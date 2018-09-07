import crypto from 'crypto';
import logger from '../logger';
import config from '../../../config/local';
import verifyAccessToken from '../services/verifyAccessToken';

export default async function (request, response, next) {
    const encryptedAccessToken = request.cookies['esi_atkn'];

    const secret = config.secretKey;
    
    const accessTokenCipher = crypto.createDecipher('aes192', secret);
    let accessToken = accessTokenCipher.update(encryptedAccessToken, 'hex', 'utf8');
    accessToken += accessTokenCipher.final('utf8');

    const verificationResponse = await verifyAccessToken(accessToken);

    request.accessToken = accessToken;
    response.locals.characterId = verificationResponse.data['CharacterID'];
    
    next();
}