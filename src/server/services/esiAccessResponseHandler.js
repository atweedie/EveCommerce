import crypto from 'crypto';
import config from '../../../config/local';

export default function(esiAccessResponse) {

    const secret = config.secretKey

    const accessKey = crypto.createCipher('aes192', secret);

    let encryptedAccessToken = accessKey.update(esiAccessResponse['access_token'], 'utf8', 'hex');
    encryptedAccessToken += accessKey.final('hex');

    const accessTokenExpiry = new Date(Date.now() + (esiAccessResponse['expires_in'] * 1000));

    const refreshKey = crypto.createCipher('aes192', secret);

    let encryptedRefreshToken = refreshKey.update(esiAccessResponse['refresh_token'], 'utf8', 'hex');
    encryptedRefreshToken += refreshKey.final('hex');

    return {
        encryptedAccessToken,
        accessTokenExpiry,
        encryptedRefreshToken, 
    };
}