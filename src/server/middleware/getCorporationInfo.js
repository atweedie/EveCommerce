import logger from '../logger';
import esiRequest from '../services/esiRequest';

export default async function (request, response, next) {

    const corporationId = response.locals.characterInfo['corporation_id'];

    const esiCorporationInfoPath = `/corporations/${corporationId}/`
    const esiCorporationIconsPath = `${esiCorporationInfoPath}icons/`

    try {
        const corporationInfo = await esiRequest(esiCorporationInfoPath);

        response.locals.corporationInfo = corporationInfo.data;

        const corporationIcons = await esiRequest(esiCorporationIconsPath)

        response.locals.icons = corporationIcons.data;

        next();
    } catch (error) {
        logger.error(error.response.data);
    }
}