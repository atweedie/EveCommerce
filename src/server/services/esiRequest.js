import axios from 'axios';
import config from '../../../config/local';

export default function(esiPath, accessToken = undefined) {

    const endpointUrl = `${config.esiBaseUrl}${esiPath}?datasource=tranquility`;
    
    return axios({ 
        method: 'GET', 
        url: endpointUrl,
    });
}