import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {CarouselReducer} from "./reducers/CarouselReducer";
import { ListMoviesReducer } from "./reducers/ListMoviesReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";
import { ChiTietPhimReducer } from "./reducers/ChiTietPhimReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyDatVeReducer } from "./reducers/QuanLyDatVeReducer";
import { LichSuDatVeReducer } from "./reducers/LichSuDatVeReducer";
import {LoadingReducer} from "./reducers/LoadingReducer";


const rootReducer = combineReducers({
    //state ứng dụng
    CarouselReducer,
    ListMoviesReducer,
    QuanLyRapReducer,
    ChiTietPhimReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
    LichSuDatVeReducer,
    LoadingReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));