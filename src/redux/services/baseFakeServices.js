import { Axios } from "axios"
import { TOKEN } from "../actions/types/CarouselTypes"
import { DOMAIN } from "../actions/types/ListMoviesTypes"

const token = localStorage.getItem(TOKEN);
const newToken = JSON.parse(token);

export class baseService {
    post = (url,model) => {
        return Axios({
            url:`${DOMAIN}/${url}`,
            method:'POST',
            data:model,
            headers: {'Authorization': 'Bearer '+ localStorage.getItem(newToken)}
        })
    }
}