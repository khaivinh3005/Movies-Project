import React, { useEffect } from 'react'
import HomeMenu from '../HomeMenu/HomeMenu'
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux'
import { getListMoviesAction } from '../../redux/actions/ListMoviesAction';
import { SET_PHIM_SAP_CHIEU, SET_PHIM_DANG_CHIEU } from '../../redux/actions/types/ListMoviesTypes'
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import './Home.css'
import { NavLink } from 'react-router-dom';

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const contentStyles = {
        height: '300px',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center",
    }

    const { arrMoives, sapChieu, dangChieu } = useSelector(state => state.ListMoviesReducer);
    let activeClassDC = dangChieu ? 'active_class' : 'none';
    let activeClassSC = sapChieu ? 'active_class' : 'none';

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListMoviesAction())
    }, [])




    const renderSliderMovies = () => {
        return arrMoives.map((item, index) => {
            return (
                <div className="px-10 rounded overflow-hidden" key={index}>
                    <div className="bg-gray-800 w-64 h-96 shadow-lg rounded p-2" style={{ height: "450px" }}>
                        <div className="py-2 px-4 text-center tracking-wide grid grid-cols-3 gap-6">
                            <div className="flex tools">
                                <p className="flex text-gray-400 text-sm justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </p>
                                <p className="text-sm text-blue-600 animate-pulse px-2">324</p>
                            </div>
                            <div className="flex followers">
                                <p className="flex text-gray-400 text-sm justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </p>
                                <p className="text-sm text-blue-600 animate-pulse px-2">7542</p>
                            </div>
                            <div className="flex following">
                                <p className="flex text-gray-400 text-sm justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </p>
                                <p className="text-sm text-blue-600 animate-pulse px-2">295</p>
                            </div>
                        </div>
                        <div className="group relative">
                            <img src={item.hinhAnh} className="block h-48 w-full bg-center rounded" alt="" />
                            <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 duration-700 transition justify-evenly">
                                <button className="hover:scale-110 text-white outline-none  opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                </button>
                                <button onClick="play_single(this.instru)" className="hover:scale-110 text-white outline-none opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                    <svg v-if="this.is_playing == false" xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                    </svg>
                                </button>
                                <button className="hover:scale-110 text-white outline-none opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="p-2 text-center">
                            <div>
                                <h3 className=" text-white py-1 text-base justify-center">{item.tenPhim.length > 19 ? item.tenPhim.slice(0, 19) + "..." : item.tenPhim}</h3>
                            </div>
                            <div className="mt-5">
                                <p className="text-gray-400 text-sm">{item.moTa.length > 50 ? item.moTa.substring(0, 50) + "..." : item.moTa}</p>
                            </div>
                            <div>
                                <NavLink to={`/detail/${item.maPhim}`} className="text-indigo-500 inline-flex items-center mb-2">Đặt Vé
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            )
        })
    }

    const handleSubmitFilmIsPlaying = () => {
        const action = {
            type: SET_PHIM_DANG_CHIEU
        }
        dispatch(action)
    }

    const handleUpComingFilm = () => {
        const action = {
            type: SET_PHIM_SAP_CHIEU
        }
        dispatch(action)
    }

    return (
        <div>
            <HomeCarousel />
            <div>
                <div className="mt-5 ml-6">
                    <button type="button" className={`relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-coolGray-100 dark:text-coolGray-900 ${activeClassSC}`} onClick={handleUpComingFilm}>Phim sắp chiếu
                        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400 text-red-500">New</span>
                    </button>
                    <button type="button" className={`relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-coolGray-100 dark:text-coolGray-900 ${activeClassDC}`} onClick={handleSubmitFilmIsPlaying}>Phim đang chiếu
                        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400 text-red-500">New</span>
                    </button>
                </div>
                <Slider {...settings} className="mt-5">
                    {renderSliderMovies()}
                </Slider>
            </div>
            <div className="mx-12">
                <HomeMenu />
            </div>
        </div>
    )
}
