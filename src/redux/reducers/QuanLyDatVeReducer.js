import { SET_GHE_DANG_DAT, SET_QUAN_LI_DAT_VE, DAT_VE_HOAN_TAT, CHUYEN_TAB, CHUYEN_TAB_1, CHUYEN_TAB_ACTIVE, SET_DAT_GHE } from "../actions/types/ListMoviesTypes";

const initialState = {
  "thongTinPhim": {
    "maLichChieu": 44581,
    "tenCumRap": "BHD Star Cineplex - Vincom Thảo Điền",
    "tenRap": "Rạp 3",
    "diaChi": "L5-Megamall, 159 XL Hà Nội, Q.2",
    "tenPhim": "Demon Slayer : The Mugen Train",
    "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/demon-slayer-the-mugen-train_gp01.jpg",
    "ngayChieu": "20/12/2021",
    "gioChieu": "09:12"
  },
  "danhSachGhe": [],
  "danhSachGheDangDat": [],
  "danhSachGheKhachDat": [],
  "TabChange": 1
}

export const QuanLyDatVeReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_QUAN_LI_DAT_VE:
      state.thongTinPhim = action.chiTietDatVe.thongTinPhim;
      state.danhSachGhe = action.chiTietDatVe.danhSachGhe;
      return { ...state }

    case SET_GHE_DANG_DAT:
      // state.danhSachGheDangDat = action.gheDuocChon.tenGhe;
      const newArr = state.danhSachGheDangDat;
      let index = newArr.findIndex(item => item.tenGhe === action.gheDuocChon.tenGhe);
      if (index !== -1) {
        newArr.splice(index, 1)
      } else {
        newArr.push(action.gheDuocChon)
      }
      state.danhSachGheDangDat = newArr;
      return { ...state }

    case DAT_VE_HOAN_TAT:
      state.danhSachGheDangDat = [];
      return { ...state }
    case CHUYEN_TAB:
      state.TabChange = 2;
      return { ...state }

    case CHUYEN_TAB_ACTIVE:
      state.TabChange = action.number;
      return { ...state }

    case SET_DAT_GHE:
      state.danhSachGheKhachDat = action.gheKhachDat;
      return { ...state }
    default:
      return state
  }
}
