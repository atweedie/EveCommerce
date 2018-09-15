import logger from '../logger';
import esiRequest from '../services/esiRequest';

export default async function (request, response, next) {

    const corporationId = response.locals.characterInfo['corporation_id'];

    const esiCorporationBlueprintsPath = `/corporations/${corporationId}/blueprints/`

    const accessToken = request.accessToken;

    try {
        const corporationBlueprints = await esiRequest(esiCorporationBlueprintsPath, accessToken);

        response.locals.blueprints = corporationBlueprints.data;

        next();
    } catch (error) {
        logger.error(error.response.data);
    }
}