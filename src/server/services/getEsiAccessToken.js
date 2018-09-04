import axios from 'axios';
import config from '../../../config/local';

export default function(token, {isRefresh = false}) {

    const esiAuthUrl = 'https://login.eveonline.com/oauth/token'
    const clientSigniture = `${config.esiClientId}:${config.esiClientSecret}`;

    const buffer = new Buffer(clientSigniture);

    const encodedSigniture = buffer.toString('base64');
    const basicAuthHeader = `Basic ${encodedSigniture}`;
    const data = isRefresh ? `grant_type=refresh_token&refresh_token=${token}`:`grant_type=authorization_code&code=${token}`;
    
    return axios({ 
        method: 'POST', 
        url: esiAuthUrl, 
        headers: {Authorization: basicAuthHeader}, 
        data
    });
}