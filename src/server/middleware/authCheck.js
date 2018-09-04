export default function (request, response, next) {
    const hasAccessCookie = request.cookies['esi_atkn'] || false;
    const hasRefreshCookie = request.cookies['esi_rtkn'] || false;

    if (hasAccessCookie && hasAccessCookie != undefined) {
        next();
    } else if (hasRefreshCookie && hasRefreshCookie != undefined) {
        response.redirect('/esi')
    } else {
        response.render('login');
    }
}  