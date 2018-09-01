import getEsiAccessToken from '../services/getEsiAccessToken';
import logger from '../logger';

export default function (request, response, next) {
    const authCode = request.query.code;
    Promise.resolve(getEsiAccessToken(authCode))
        .then(result => {
            logger.info(result);

            response.cookie(
                'esi_atkn', 
                esiTokenResponse['access_token'], 
                {
                    expires:  new Date(Date.now() + esiTokenResponse['expires_in'])
                }
            );

            next();
        })
        .catch(err => {
            logger.error(err)
            response.send('Error!');
        })
}
