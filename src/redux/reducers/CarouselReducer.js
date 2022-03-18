import { GET_CAROUSEL_BANNER } from "../actions/types/CarouselTypes"

const initialState = {    
    arrBanner : [{
        "maBanner": 1,
        "maPhim": 122,
        "hinhAnh": "https://i.imgur.com/sGq1OE4.jpg"
    }]
}




export const CarouselReducer = (state = initialState, action) => {
    switch (action.type) {

    case GET_CAROUSEL_BANNER:
        state.arrBanner = action.arrImg;
        return {...state}

    default:
        return {...state}
    }
}

