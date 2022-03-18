import { GET_LIST_RAP } from "../actions/types/CarouselTypes"

const initialState = {
    content: [
        {
          "maHeThongRap": "BHDStar",
          "tenHeThongRap": "BHD Star Cineplex",
          "biDanh": "bhd-star-cineplex",
          "logo": "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
        },
        {
          "maHeThongRap": "CGV",
          "tenHeThongRap": "cgv",
          "biDanh": "cgv",
          "logo": "https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
        }
    ]
}

export const QuanLyRapReducer = (state = initialState, action) => {
    switch (action.type) {

    case GET_LIST_RAP:
        state.content = action.arrListRap;
        return { ...state}

    default:
        return state
    }
}
