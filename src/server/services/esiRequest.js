import axios from 'axios';
import config from '../../../config/local';

export default function(esiPath, accessToken = undefined) {

    const endpointUrl = `${config.esiBaseUrl}${esiPath}?datasource=tranquility`;
    const headers = accessToken != undefined ? {Authorization: `Bearer ${accessToken}`} : '';
    
    return axios({ 
        method: 'GET', 
        url: endpointUrl,
        headers, 
    });
}