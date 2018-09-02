
export default function (request, response, next) {
        
    response.cookie(
        'esi_atkn', 
        response.locals.encryptedToken, 
        {expires:  response.locals.tokenExpiry}
    );

    next();
}