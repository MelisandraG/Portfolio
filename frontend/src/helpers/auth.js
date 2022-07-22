import Cookies from 'js-cookie';

const jwtToken = Cookies.get('userportfolio_token')

export const config = {
    headers: {
        Authorization: 'Bearer ' + jwtToken
    },
}