import React, { useEffect } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListRapAction } from '../../redux/actions/QuanLiRapAction';
import moment from 'moment';

const { TabPane } = Tabs;
export default function HomeMenu() {
    const [state, setState] = useState({ tabPosition: 'left' });
    const dispatch = useDispatch();
    const { content } = useSelector(state => state.QuanLyRapReducer);
    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    };
    const contentStyles = {
        height: '500px',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
    }
    const { tabPosition } = state;
    const renderRapFilm = () => {
        return content.map((item, index) => {
            return (
                <TabPane tab={<img src={`${item.logo}`} className="rounded-full" width={50} />} key={index}>
                    <Tabs tabPosition={tabPosition}>
                        {item.lstCumRap?.map((cumRap, index) => {
                            return (
                                <TabPane tab={
                                    <div className="flex">
                                        <img src="https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-camau-03_1557128024900.jpg" width={100} alt="" />
                                        <div className="ml-3">
                                            {cumRap.tenCumRap} <br />
                                            <a href="">Chi Tiet</a>
                                        </div>
                                    </div>
                                } key={index}>
                                    {cumRap.danhSachPhim?.filter(item => item.maPhim !== 1314).map((phim, index) => {
                                        return (
                                            <div className="flex mb-5">
                                                <img className="" src={phim.hinhAnh} onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null; // prevents looping
                                                    currentTarget.src = "https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-camau-03_1557128024900.jpg";
                                                }} style={{ width: "100px", height: "100px" }} alt="" />
                                                <div className="ml-3 ">
                                                    <h6>{phim.tenPhim}</h6>
                                                    <p>{cumRap.diaChi}</p>
                                                    <div className="grid grid-cols-6 gap-6">
                                                        {phim.lstLichChieuTheoPhim?.map((item, index) => {
                                                            return (
                                                                <a href="">{moment(item.ngayChieuGioChieu).format('hh:mm A')}</a>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </TabPane>

                            )
                        })}
                    </Tabs>
                </TabPane>
            )
        })
    }

    useEffect(() => {
        dispatch(getListRapAction())
    }, [])

    return (
        <>
            <button type="button" className={`relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-coolGray-100 dark:text-coolGray-900 bg-black text-white mb-6`}>Hệ thống rạp
                <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400 text-red-500">New</span>
            </button>
            <Tabs tabPosition={tabPosition}>
                {renderRapFilm()}
            </Tabs>
        </>
    )
}
