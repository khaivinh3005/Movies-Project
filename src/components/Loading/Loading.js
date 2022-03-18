import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Loading() {
    const contenStyles = {
        background: "url(https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif) no-repeat fixed center",
    }
    const { isPlay } = useSelector(state => state.LoadingReducer)
    return (
        <>
            {isPlay ?
                <div style={{ position: "fixed", top: 0, left: 0, width: '100%', height: "100%", backgroundColor: "rgba(0,0,0,.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99 }}>
                    <div style={contenStyles} className="text-2xl text-white"><img className="opacity-0" src="https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif" alt="" /></div>
                </div>
                : ""}
        </>
    )
}
