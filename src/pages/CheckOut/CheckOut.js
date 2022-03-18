import React, { useState, useEffect } from 'react'
import { TOKEN } from '../../redux/actions/types/CarouselTypes'
import { History } from 'history'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import "./CheckOut.css"
import { datGheAction, getChiTietDatVeAction } from '../../redux/actions/QuanLiDatVeAction'
import { Fragment } from 'react'
import { CloseOutlined,UserOutlined,QqOutlined } from '@ant-design/icons';
import { CHUYEN_TAB_1, CHUYEN_TAB_ACTIVE, SET_DAT_GHE, SET_GHE_DANG_DAT, SET_LICH_SU_DAT_VE } from '../../redux/actions/types/ListMoviesTypes'
import { object } from 'yup'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { getDatVeAction } from '../../redux/actions/DatVeAction'
import { Tabs } from 'antd';
import { LichSuDatVe } from '../../redux/actions/QuanLiNguoiDungAction'
import _, { constant } from 'lodash'
import { display_loading, hide_loading } from '../../redux/actions/LoadingAction'
import { connection } from '../../index'

function CheckOut(props) {
    const { thongTinPhim, danhSachGhe ,danhSachGheDangDat ,danhSachGheKhachDat} = useSelector(state => state.QuanLyDatVeReducer);
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        datGheAction();

        const maLichChieu = props.match.params.id;
        dispatch(getChiTietDatVeAction(maLichChieu))

        //có 1 client nào thực việc đắt vé thành công thì mình sẽ load lại danh sách ghế
        connection.on('datVeThanhCong', () => {
            dispatch(getChiTietDatVeAction(maLichChieu))
        })
        //Vừa vào trang load danh sách ghế của các người khác đang đặt
        connection.invoke('loadDanhSachGhe',maLichChieu)



        //load danh sach ghe khach dat tu server ve`(lắng nge tín hiệu từ server trả về)
        connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
            console.log("dsGheKhachDat : ",dsGheKhachDat)
            //B1: loai tk minh khoi danh sach
            dsGheKhachDat = dsGheKhachDat.filter(item => item.taiKhoan !== userLogin.taiKhoan);

            //B2: Gop ds ghe dat o tat ca user thanh 1 mang
            let arrGheKhachDat = dsGheKhachDat.reduce((result,item,index)=> {
                let arrGhe = JSON.parse(item.danhSachGhe);
                return [...result,...arrGhe]
            },[])

            arrGheKhachDat = _.unionBy(arrGheKhachDat,'maGhe');
            dispatch({
                type: SET_DAT_GHE,
                gheKhachDat: arrGheKhachDat
            })
        })

        window.addEventListener('beforeunload',clearGhe);
        return () => {
            clearGhe();
            window.removeEventListener('beforeunload',clearGhe)
        }
    }, [])

    const clearGhe = function() {
        connection.invoke('huyDat',userLogin.taiKhoan , props.match.params.id)
    }

    if (!localStorage.getItem(TOKEN)) {
        return <Redirect to="/login" />
    } else {
        return (
            <div className="body-oke">
                <div className="grid grid-cols-12 mx-20 gap-2 mt-20" style={{ minHeight: "60%" }}>
                    <div className="col-span-8">
                        <div className="w-full h-4" style={{ backgroundColor: "#e1ac4b" }}>
                        </div>
                        <div className="trapezoid text-center relative">
                            <h1 className="absolute top-3 left-1/2">Màn Hình</h1>
                        </div>
                        <div className="mt-20 grid grid-cols-12">
                            {danhSachGhe?.slice(0, 108).map((ghe, index) => {
                                const classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
                                const classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
                                let classGheDangDat = '';

                                let indexGhe = danhSachGheDangDat?.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
                                if (indexGhe !== -1) {
                                    classGheDangDat = 'gheDangDat'
                                }

                                let classGheDaDuocDat = '';
                                if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                                    classGheDaDuocDat = 'gheDaDuocDat'
                                }

                                let classGheKhachDat = '';
                                let indexGheKhachDat = danhSachGheKhachDat?.findIndex(gheKD => gheKD.maGhe === ghe.maGhe);
                                if(indexGheKhachDat !== -1) {
                                    classGheKhachDat = 'gheKhachDat'
                                }

                                
                                return (
                                    <Fragment>
                                        <button onClick={() => {
                                            dispatch(datGheAction(ghe,props.match.params.id));
                                        }} disabled={ghe.daDat || classGheKhachDat !== ''} className={`ghe  ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat}`} key={index}>{ghe.daDat ? classGheDaDuocDat != '' ? <UserOutlined /> : <CloseOutlined /> : classGheKhachDat !== '' ? <QqOutlined style={{marginBottom:"7px"}} /> : ghe.stt}</button>
                                    </Fragment>

                                )
                            })}
                        </div>
                        <div className="mt-5 flex justify-center">
                            <table className="min-w-full divide-y divide-gray-200 w-2/3">
                                <thead className="p-5">
                                    <tr>
                                        <th>Ghế chưa đặt</th>
                                        <th>Ghế đang đặt</th>
                                        <th>Ghế vip</th>
                                        <th>Ghế đã đặt</th>
                                        <th>Ghế mình đặt</th>
                                        <th>Ghế khách đặt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><div class="flex justify-center"><div className="ghe"></div></div></td>
                                        <td><div class="flex justify-center"><div className="ghe gheDangDat"></div></div></td>
                                        <td><div class="flex justify-center"><div className="ghe gheVip"></div></div></td>
                                        <td><div class="flex justify-center"><div className="ghe gheDaDat"></div></div></td>
                                        <td><div class="flex justify-center"><div className="ghe gheDaDuocDat"></div></div></td>
                                        <td><div class="flex justify-center"><div className="ghe gheKhachDat"></div></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="container-fake col-span-4">
                        <div className="p-8">
                            <h1 className="text-center text-2xl">{thongTinPhim.tenPhim.toUpperCase()}</h1>
                            <div className="flex justify-between mt-5">
                                <span>Ngày chiếu - Giờ chiếu</span>
                                <span>{thongTinPhim.ngayChieu + " - " + thongTinPhim.gioChieu}</span>
                            </div>
                            <hr />
                            <div className="flex justify-between mt-5">
                                <span >Địa chỉ:</span>
                                <span >{thongTinPhim.diaChi}</span>
                            </div>
                            <hr />
                            <div className="flex justify-between mt-5">
                                <span >Cụm rạp</span>
                                <span >{thongTinPhim.tenCumRap} <br />{thongTinPhim.tenRap} </span>
                            </div>
                            <hr />
                            <div className="flex justify-between mt-5">
                                <span >Ghế chọn</span>
                                <div className="grid grid-cols-4 gap-3">
                                    {danhSachGheDangDat?.map((gheDD, index) => {
                                        return (
                                            <span key={index} className="text-2xl">{gheDD.tenGhe}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            <hr />
                            <div className="mt-20">
                                <div className="flex justify-between">
                                    <span >Ưu đãi</span>
                                    <span >0%</span>
                                </div>
                                <hr />
                                <div className="flex justify-between mt-10">
                                    <span >Tổng tiền : </span>
                                    <span >{danhSachGheDangDat?.reduce((tongTien, ghe, index) => {
                                        return tongTien += ghe.giaVe;
                                    }, 0).toLocaleString() + " VND"}</span>
                                </div>
                                <div className="flex justify-center">
                                    <button onClick={() => {
                                        const thongTinDatVe = new ThongTinDatVe();
                                        thongTinDatVe.maLichChieu = props.match.params.id;
                                        thongTinDatVe.danhSachVe = danhSachGheDangDat;
                                        dispatch(getDatVeAction(thongTinDatVe))
                                    }} className="text-white font-bold py-2 w-full rounded my-5 booking">Đặt vé</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const { TabPane } = Tabs;
export default function (props) {
    const {TabChange} = useSelector(state => state.QuanLyDatVeReducer);
    const dispatch = useDispatch();
    return (
        <div className="pt-5 px-5"> 
            <Tabs defaultActiveKey ="1"   activeKey={`${TabChange}`} onChange={async(key) => {
                const action = {
                    type: CHUYEN_TAB_ACTIVE,
                    number: key
                }
                // dispatch(display_loading);
                await dispatch(action);
                await dispatch(LichSuDatVe());
                // dispatch(hide_loading);
            }} >
                <TabPane tab="01 CHỌN GHẾ VÀ THANH TOÁN" key="1" >
                    <CheckOut {...props} />
                </TabPane>
                <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
                    <KetQuaDatVe {...props} />
                </TabPane>
            </Tabs>
        </div>
    )
}


function KetQuaDatVe(props) {
    const { thongTinDatVe } = useSelector(state => state.LichSuDatVeReducer);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(LichSuDatVe())
    }, [])
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lịch sử đặt vé khách hàng</h1>
                </div>
                <div className="flex flex-wrap -m-2">
                    {thongTinDatVe?.map((thongTin, index) => {
                        console.log("thongTin : ",thongTin)
                        let seats = _.head(thongTin.danhSachGhe);
                        console.log('seats : ',seats)
                        return (
                            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={thongTin.hinhAnh} />
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 title-font font-medium">{thongTin.tenPhim.toUpperCase()}</h2>
                                        <p className="text-gray-500">Giờ chiếu : {moment(thongTin.ngayDat).format("hh:mm A")} - Ngày chiếu : {moment(thongTin.ngayDat).format("DD-MM-YYYY")}</p>
                                        <p>Địa chỉ rạp : {seats?.tenHeThongRap}</p>
                                        <p>Mã rạp : {seats?.maCumRap}</p>
                                        <p>Ghế : </p>
                                        <div className="grid grid-cols-4 col-span-2">
                                        {thongTin.danhSachGhe.length > 0 ? thongTin.danhSachGhe.map((item,index) => <div key={index}>{item.tenGhe}</div>) : <div>{thongTin.danhSachGhe.tenGhe}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
