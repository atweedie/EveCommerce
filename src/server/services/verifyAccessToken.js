import axios from 'axios';

export default function(accessToken) {

    const esiVerifyUrl = 'https://esi.tech.ccp.is/verify/'

    const bearerAuthHeader = `Bearer ${accessToken}`;
    
    return axios({ 
        method: 'GET', 
        url: esiVerifyUrl, 
        headers: {Authorization: bearerAuthHeader}, 
    });
}