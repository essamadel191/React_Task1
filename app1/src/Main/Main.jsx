import React from 'react'
import mainStyle from './Main.module.css'
import mainImgSrc from '../assets/avatar1.svg'

const Main = () => {
  return (
    <>
        <div>
            <div className={`d-flex justify-content-center align-items-center ${mainStyle.avatarDiv}`}>
                <div className='justify-content-center align-items-center text-white'>
                    <div className={mainStyle.mainImg} >
                        <img src={mainImgSrc} alt="My Avatar Img"/>
                    </div>
                    <div className={mainStyle.imgThum}>
                        <h2 className='fs-1 fw-bolder'>Start Framework</h2>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <div className={`line me-3 bg-white ${mainStyle.line}`}></div>
                        <i class="fa-solid fa-star me-3"></i>
                        <div className={`line bg-white ${mainStyle.line}`}></div>
                    </div>
                    <div className='text-center'>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main