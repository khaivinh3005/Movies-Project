import { http } from '../../redux/services/baseService'
import { SET_CHI_TIET_PHIM } from './types/ListMoviesTypes';

export const getChiTietPhimAction = (maPhim) => {
    
    return async(dispatch) => {
        try {
            const result = await http.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
            const action = {
                type: SET_CHI_TIET_PHIM,
                chiTietPhim: result.data.content
            }
            dispatch(action);
        } catch (errors) {
            console.log('errors', errors)
    
        }
    }
}