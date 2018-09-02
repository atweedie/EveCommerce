import crypto from 'crypto';
import * as config from '../../../config/local';

export default function(esiAccessResponse) {

    const secret = config.secretKey
    const encryptedAccessToken = crypto.createHmac('sha256', secret)
        .update(esiAccessResponse['access_token'])
        .digest('hex');

    const accessTokenExpiry = new Date(Date.now() + (esiAccessResponse['expires_in'] * 1000));

    const encryptedRefreshToken = crypto.createHmac('sha256', secret)
    .update(esiAccessResponse['refresh_token'])
    .digest('hex');

    return {
        encryptedAccessToken,
        accessTokenExpiry,
        encryptedRefreshToken, 
    };
}