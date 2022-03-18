import { connection } from '../../index';
import { http } from '../../redux/services/baseService'
import { SET_GHE_DANG_DAT, SET_QUAN_LI_DAT_VE } from './types/ListMoviesTypes';

export const getChiTietDatVeAction = (maPhim) => {
    
    return async(dispatch) => {
        try {
            const result = await http.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maPhim}`);
            if(result.status === 200) {
                const action = {
                    type: SET_QUAN_LI_DAT_VE,
                    chiTietDatVe: result.data.content
                }
                dispatch(action);
            }
        } catch (errors) {
            console.log('errors', errors)
    
        }
    }
}

export const datGheAction = (ghe,maLichChieu) => {
    return async (dispatch,getState) => {
        //dua thong tin ghe len reducer
        await dispatch({
            type: SET_GHE_DANG_DAT,
            gheDuocChon: ghe
        });

        //Call api ve backend
        let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
        let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
        console.log("danhSachGheDangDat : ",danhSachGheDangDat)
        connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu)
        // connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu)
    }
}