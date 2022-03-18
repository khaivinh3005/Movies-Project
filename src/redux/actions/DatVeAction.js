import { http } from '../../redux/services/baseService'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import { display_loading, hide_loading } from './LoadingAction';
import { DAT_VE_HOAN_TAT, SET_DAT_VE, SET_QUAN_LI_DAT_VE ,CHUYEN_TAB } from './types/ListMoviesTypes';
import { SET_LOADING, HIDE_LOADING } from './types/ListMoviesTypes';
import { getChiTietDatVeAction } from './QuanLiDatVeAction';
import { LichSuDatVe } from './QuanLiNguoiDungAction';
import { connection } from '../../index';

export const getDatVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async (dispatch , getState) => {
        try {
            dispatch(display_loading)
            const result = await http.post(`api/QuanLyDatVe/DatVe`, thongTinDatVe);
            const action = {
                type: SET_DAT_VE,
                datVe: result.data.content
            }
            dispatch(action);
            await dispatch(getChiTietDatVeAction(thongTinDatVe.maLichChieu));
            await dispatch({ type: DAT_VE_HOAN_TAT });
            await dispatch({type: CHUYEN_TAB})
            await dispatch(LichSuDatVe())
            await dispatch(hide_loading)

            let userLogin = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;
            connection.invoke('datGheThanhCong',userLogin,thongTinDatVe.maLichChieu);
        } catch (errors) {
            console.log('errors', errors)

        }
    }
}