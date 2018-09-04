import crypto from 'crypto';
import logger from '../logger';
import config from '../../../config/local';
import getCharacterInfo from '../services/getCharacterInfo';

export default async function (request, response, next) {
    const encryptedAccessToken = request.cookies['esi_atkn'];

    const secret = config.secretKey;
    
    const accessTokenCipher = crypto.createDecipher('aes192', secret);
    let accessToken = accessTokenCipher.update(encryptedAccessToken, 'hex', 'utf8');
    accessToken += accessTokenCipher.final('utf8');

    logger.info('Requesting Character Info');

    const esiCharacterInfo = await getCharacterInfo(accessToken);

    logger.info(esiCharacterInfo.data);

    Object.assign(esiCharacterInfo.data, response.locals);

    next();
}