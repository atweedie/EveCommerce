import cryptoRandomString from 'crypto-random-string';
import config from '../../../config/local';

export default function (request, response, next) {
    const clientId = config.esiClientId;
    const stateNonce = cryptoRandomString(10);

    const eveSsoUrl = `https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:8080/callback&client_id=${clientId}&scope=esi-corporations.read_blueprints.v1&state=${stateNonce}`

    response.redirect(eveSsoUrl);
}
