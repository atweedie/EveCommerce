import crypto from 'crypto';
import * as config from '../../../config/local';

export default function(esiAccessResponse) {

    const secret = config.secretKey
    const encryptedToken = crypto.createHmac('sha256', secret)
        .update(esiAccessResponse['access_token'])
        .digest('hex');

    const tokenExpiry = new Date(Date.now() + (esiAccessResponse['expires_in'] * 1000));

    return {
        encryptedToken, 
        tokenExpiry
    };
}