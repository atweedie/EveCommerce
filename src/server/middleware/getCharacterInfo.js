import logger from '../logger';
import esiRequest from '../services/esiRequest';

export default async function (request, response, next) {

    const characterId = response.locals['characterId'];

    const esiCharacterInfoPath = `/characters/${characterId}/`
    const esiCharacterPortraitPath = `${esiCharacterInfoPath}portrait/`

    try {
        const characterInfo = await esiRequest(esiCharacterInfoPath);

        response.locals.characterInfo = characterInfo.data;

        const characterPortraits = await esiRequest(esiCharacterPortraitPath)

        response.locals.portraits = characterPortraits.data;

        next();
    } catch (error) {
        logger.error(error.response.data);
    }
}