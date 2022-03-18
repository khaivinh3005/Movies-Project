import React, { useEffect, useState } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { Tabs, Radio, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import "../../src/Assets/styles/circleRating.css"
import { getChiTietPhimAction } from '../redux/actions/ChiTietPhimAction';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';
import { NavLink } from 'react-router-dom';
import './Detail.css'


export default function Detail(props) {
    const [isOpen, setOpen] = useState(false)
    const { heThongRapChieu, hinhAnh, tenPhim, ngayKhoiChieu, moTa, trailer, danhGia, maPhim } = useSelector(state => state.ChiTietPhimReducer);
    let text = trailer.search('=');
    let index = trailer.slice(text + 1);
    const dispatch = useDispatch();
    const contentStyles = {
        minHeight: '100vh',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        background: `url(${hinhAnh})`
    }
    const { TabPane } = Tabs;
    useEffect(() => {
        dispatch(getChiTietPhimAction(props.match.params.id))
    }, [])
    return (
        <div style={contentStyles}>
            <CustomCard
                style={{ paddingTop: 150, minHeight: '100vh' }}
                effectColor="rgb(217 124 124 / 10%)" // required
                color="#5c5c58" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className="grid grid-cols-12">
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={index} onClose={() => setOpen(false)} />
                    <div className="col-span-6 col-start-2">
                        <div className="grid grid-cols-2 text-gray-800">
                            <div className="flex relative">
                                <img src={hinhAnh} alt="123" />
                                <div class="dot">{danhGia}</div>
                            </div>
                            <div className="ml-3 glass ">
                                <h1 className="text-4xl text-center ml-2 text-white">{tenPhim.toUpperCase()}</h1>
                                <p className="ml-2">{moTa}</p>
                                <p className="ml-2">{'Ngày chiếu : ' + moment(ngayKhoiChieu).format('MM/DD/YYYY')}</p>
                                <div className="ml-2">
                                    <button className=" bg-blue-600 hover:bg-gray-100 hover:text-black text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setOpen(true)}>Xem Trailer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 col-start-9 text-gray-800 grid justify-items-center mr-0 mb-0">
                        <div className="text-white text-xl mb-5">Đánh giá</div>
                        <div class="c100 p50 big green">
                            <span>{danhGia}0%</span>
                            <div class="slice">
                                <div class="bar"></div>
                                <div class="fill"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 container">
                    <Tabs tabPosition={'left'}>
                        {heThongRapChieu?.map((heThong, index) => {
                            return (
                                <TabPane tab={<img src={heThong.logo} width={70} height={80} />} key={index}>
                                    <div>
                                        <div className="card-container text-black glass">
                                            <Tabs type="card" >
                                                <TabPane tab="Thứ 2" key={1}>
                                                    {heThong.cumRapChieu.map((cumRap, index) => {
                                                        return (
                                                            <div key={index} className="mt-3">
                                                                <div className="flex">
                                                                    <img src={cumRap.hinhAnh} width={70} height={70} alt="" />
                                                                    <div className="ml-3">
                                                                        <h5>{cumRap.tenCumRap}</h5>
                                                                        <p>{cumRap.diaChi}</p>
                                                                    </div>
                                                                </div>
                                                                {cumRap.lichChieuPhim.map((thongTin, index) => {
                                                                    return (
                                                                        <div className="flex mt-1">

                                                                            <img src="https://s3.envato.com/files/264090465/Mock.jpg" width={60} height={40} alt="" />
                                                                            <div className="ml-6 grid grid-cols-5 gap-3">
                                                                                <NavLink to={`/checkout/${thongTin.maLichChieu}`} className="bg-red-700 mt-2 hover:bg-gray-100 hover:text-black text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">{moment(thongTin.ngayChieuGioChieu).format("hh:mm")}</NavLink>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        )
                                                    })}
                                                </TabPane>
                                            </Tabs>
                                        </div>
                                    </div>
                                </TabPane>
                            )
                        })}

                    </Tabs>
                </div>
            </CustomCard>
        </div>

    )
}
