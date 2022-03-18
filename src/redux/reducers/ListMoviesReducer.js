import { GET_LIST_MOVIES } from "../actions/types/CarouselTypes"
import { SET_PHIM_DANG_CHIEU , SET_PHIM_SAP_CHIEU } from "../actions/types/ListMoviesTypes";

const initialState = {
    arrMoives: [
        {
            "maPhim": 8370,
            "tenPhim": "Canh Chim Dai Bang season3 111",
            "biDanh": "canh-chim-dai-bang-season3-111",
            "trailer": "",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/fsdfsda_gp01.jpg",
            "moTa": "Canh Chim Dai Bang season3",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-02-14T09:57:36.957",
            "danhGia": 8,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
        },
        ,
        {
            "maPhim": 8791,
            "tenPhim": "ÁN MẠNG TRÊN SÔNG NILE",
            "biDanh": "an-mang-tren-song-nile",
            "trailer": "",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/an-mang-tren-song-nile_gp01.jpeg",
            "moTa": "Án Mạng Trên Sông Nile xoay quanh chuyến đi tham quan Ai Cập của thám tử Poirot. Trên chiếc du thuyền nhỏ, ông bắt gặp một cặp nam thanh nữ tú: nàng triệu phú trẻ Linnet Doyle và người chồng mới cưới Simon Doyle đang hưởng tuần trăng mật. Chuyến đi hạnh phúc của hai người bị phá hỏng bởi người tình cũ của Simon - Jacqueline de Bellefort không ngừng bám theo phá đám.\r\n",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-02-10T00:00:00",
            "danhGia": 9,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        }
    ],
    newArrMovies: [],
    dangChieu: false,
    sapChieu: true
}

export const ListMoviesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST_MOVIES:
            state.arrMoives = action.arrListMovies;
            state.newArrMovies = state.arrMoives;
            return { ...state }
        
        case SET_PHIM_DANG_CHIEU:
            state.dangChieu = !state.dangChieu;
            state.sapChieu = false;
            state.arrMoives = state.newArrMovies.filter(item => item.dangChieu === state.dangChieu);
            return {...state}

        case SET_PHIM_SAP_CHIEU:
            state.sapChieu = !state.sapChieu;
            state.dangChieu = false;
            state.arrMoives = state.newArrMovies.filter(item => item.sapChieu === state.sapChieu);
            return {...state}

        
        default:
            return state
    }
}
