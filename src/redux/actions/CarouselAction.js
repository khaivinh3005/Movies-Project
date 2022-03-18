import { http } from '../../redux/services/baseService'
import { GET_CAROUSEL_BANNER } from './types/CarouselTypes'
export const getCarouselAction = () => {
    
    return async(dispatch) => {
        try {
            const result = await http.get('/api/QuanLyPhim/LayDanhSachBanner')
            const action = {
                type: GET_CAROUSEL_BANNER,
                arrImg: result.data.content
            }
            dispatch(action);
        } catch (errors) {
            console.log('errors', errors)
    
        }
    }
}