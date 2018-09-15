
export default function (request, response, next) {
        
    response.cookie(
        'esi_atkn', 
        response.locals.encryptedAccessToken, 
        {expires:  response.locals.accessTokenExpiry}
    );

    response.cookie(
        'esi_rtkn', 
        response.locals.encryptedRefreshToken, 
    );

    next();
}