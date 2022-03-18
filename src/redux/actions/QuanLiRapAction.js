import { http } from '../../redux/services/baseService'
import { GET_LIST_RAP } from './types/CarouselTypes'
import { MA_NHOM1 } from './types/ListMoviesTypes'

export const getListRapAction = () => {
    
    return async(dispatch) => {
        try {
            const result = await http.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MA_NHOM1}`);
            const action = {
                type: GET_LIST_RAP,
                arrListRap: result.data.content
            }
            dispatch(action);
        } catch (errors) {
            console.log('errors', errors)
    
        }
    }
}