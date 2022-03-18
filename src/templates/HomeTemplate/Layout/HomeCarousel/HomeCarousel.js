import React , {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundPosition: "center",
};

export default function HomeCarousel() {
    const state = useSelector(state => state.CarouselReducer.arrBanner);
    const dispatch = useDispatch();
    const renderCarousel = () => {
        return state.map((item, index) => {
            return (
                <div key={index}>
                    <div style={{...contentStyle,backgroundImage:`url(${item.hinhAnh})`}}>
                        <img className="w-full opacity-0" src={item.hinhAnh} alt="" />
                    </div>
                </div>
            )
        })
    }
    useEffect(() => {
       dispatch(getCarouselAction());
    }, [])
    return (
        <Carousel effect="fade">
            {renderCarousel()}
        </Carousel>
    )
}
