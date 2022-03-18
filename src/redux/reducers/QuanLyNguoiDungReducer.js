import { DANG_NHAP, TOKEN } from "../actions/types/CarouselTypes"

let user = {}
if(localStorage.getItem(DANG_NHAP)){
    user = JSON.parse(localStorage.getItem(DANG_NHAP));
}
const initialState = {
    userLogin : user
}

export const QuanLyNguoiDungReducer = (state = initialState,action) => {
    switch (action.type) {

    case DANG_NHAP: 
        localStorage.setItem(DANG_NHAP,JSON.stringify(action.thongTin));
        localStorage.setItem(TOKEN,JSON.stringify(action.thongTin.accessToken));
        state.userLogin = action.thongTin;
        return { ...state}
    default:
        return state
    }
}
