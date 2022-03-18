import { http } from '../../redux/services/baseService'
import { GET_CAROUSEL_BANNER, GET_LIST_MOVIES } from './types/CarouselTypes'
import { MA_NHOM1 } from './types/ListMoviesTypes'
export const getListMoviesAction = () => {
    
    return async(dispatch) => {
        try {
            const result = await http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM1}`);
            const action = {
                type: GET_LIST_MOVIES,
                arrListMovies: result.data.content
            }
            dispatch(action);
        } catch (errors) {
            console.log('errors', errors)
    
        }
    }
}