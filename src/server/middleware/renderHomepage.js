export default function (request, response, next) {
    const isAuthorised = request.cookies['esi_atkn'] || request.cookies['esi_rtkn'] || false;

    if (isAuthorised && isAuthorised != undefined) {
        response.render('home')
    } else {
        response.render('login')
    }
}  