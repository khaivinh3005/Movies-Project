import { SET_LICH_SU_DAT_VE } from "../actions/types/ListMoviesTypes"

const initialState = {
    thongTinDatVe: [
        {
            danhSachGhe: {
                maCumRap: "Rạp 2",
                maGhe: 73168,
                maHeThongRap: "CGV",
                maRap: 612,
                tenCumRap: "Rạp 2",
                tenGhe: "08",
                tenHeThongRap: "CGV - Pandora City",
                tenRap: "Rạp 2"
            },
            giaVe: 100000,
            hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/red-notice_gp01.jpg",
            maVe: 76076,
            ngayDat: "2022-03-01T16:09:42.973",
            tenPhim: "red notice",
            thoiLuongPhim: 120,
        }
    ]
}

export const LichSuDatVeReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LICH_SU_DAT_VE:
            console.log("lichSuDatVe : ",action.lichSuDatVe)
            state.thongTinDatVe = action.lichSuDatVe.thongTinDatVe;
            return { ...state }

        default:
            return state
    }
}
