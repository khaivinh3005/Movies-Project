import { SET_CHI_TIET_PHIM } from "../actions/types/ListMoviesTypes"

const initialState = {
    heThongRapChieu: [
        {
            "cumRapChieu": [
                {
                    "lichChieuPhim": [
                        {
                            "maLichChieu": "44667",
                            "maRap": "454",
                            "tenRap": "Rạp 4",
                            "ngayChieuGioChieu": "2022-01-14T09:23:47",
                            "giaVe": 75000.0,
                            "thoiLuong": 120
                        }
                    ],
                    "maCumRap": "bhd-star-cineplex-3-2",
                    "tenCumRap": "BHD Star Cineplex - 3/2",
                    "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
                    "diaChi": "L5-Vincom 3/2, 3C Đường 3/2, Q.10"
                }
            ],
            "maHeThongRap": "BHDStar",
            "tenHeThongRap": "BHD Star Cineplex",
            "logo": "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
        }
    ],
    maPhim: 8572,
    tenPhim: "Red Snake",
    biDanh: "red-snake",
    trailer: "https://www.youtube.com/watch?v=l265kPOsDXM",
    hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/red-snake_gp01.jpg",
    moTa: "While trying to secure sister from Fahai's clutches, Qing winds up in a city and meets a mysterious man who can't recall his past life.",
    maNhom: "GP01",
    hot: true,
    dangChieu: true,
    sapChieu: false,
    ngayKhoiChieu: "2022-01-14T23:05:38.21",
    danhGia: 5
}

export const ChiTietPhimReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CHI_TIET_PHIM:
            state.heThongRapChieu = action.chiTietPhim.heThongRapChieu;
            state.tenPhim = action.chiTietPhim.tenPhim;
            state.hinhAnh = action.chiTietPhim.hinhAnh;
            state.moTa = action.chiTietPhim.moTa;
            state.trailer = action.chiTietPhim.trailer;
            state.danhGia = action.chiTietPhim.danhGia;
            state.maPhim = action.chiTietPhim.maPhim;
            return { ...state }

        default:
            return state
    }
}
