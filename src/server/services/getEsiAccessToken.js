import axios from 'axios';
import config from '../../../config/local';

export default function(authCode) {

    const esiAuthUrl = 'https://login.eveonline.com/oauth/token'
    const clientSigniture = `${config.esiClientId}:${config.esiClientSecret}`;

    const buffer = new Buffer(clientSigniture);

    const encodedSigniture = buffer.toString('base64');
    const basicAuthHeader = `Basic ${encodedSigniture}`;
    
    return axios({ 
        method: 'POST', 
        url: esiAuthUrl, 
        headers: {Authorization: basicAuthHeader}, 
        data: `grant_type=authorization_code&code=${authCode}`
    });
}