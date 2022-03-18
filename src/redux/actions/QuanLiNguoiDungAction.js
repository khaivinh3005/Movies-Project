import { history } from '../../App';
import { http } from '../services/baseService'
import { DANG_NHAP, TOKEN } from './types/CarouselTypes'
import { SET_LICH_SU_DAT_VE } from './types/ListMoviesTypes';

export const QuanLyNguoiDung = (thongTinDangNhap) => {

    return async (dispatch) => {
        try {
            const result = await http.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);

            if (result.status === 200) {
                const action = {
                    type: DANG_NHAP,
                    thongTin: result.data.content
                }
                dispatch(action);
                if(localStorage.getItem(TOKEN)){
                    history.goBack();
                }
            }
        } catch (errors) {
            console.log('errors', errors)

        }
    }
}

export const LichSuDatVe = () => {

    return async (dispatch) => {
        try {
            const result = await http.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);

            if (result.status === 200) {
                const action = {
                    type: SET_LICH_SU_DAT_VE,
                    lichSuDatVe: result.data.content
                }
                dispatch(action);
            }
        } catch (errors) {
            console.log('errors', errors)

        }
    }
}

export const loginFireBase = (userToken) => {
    if(JSON.parse(localStorage.getItem('accessToken')) === userToken)
    return history.push("/");
}

