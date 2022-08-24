import React from 'react'
import CardsSkel from './CardsSkel'
import './skeleton.css'
import './skeleton-resp.css'
import Advertisement from '../Components/Advertisement'

export default function TopStoriesSkel() {
    return (
        <div className='container'>
            <Advertisement
                
                width="100%"
                advBg="advertisement-bg-top adskel"

            />
            <div className='section-detail'>
                <div className='sub-sec-one'>
                    <div className="heading"></div>
                    <div className="title"></div>
                    <div className="desc"></div>
                    <div className='author-details'>
                        <span className='date'></span>
                        <span className='author-name'></span>
                    </div>
                    <div className='btn-skel'></div>
                </div>
                <div className='sub-sec-one'>
                    <div className="sec-img">
                        <img className='img' alt="" />
                    </div>
                </div>

            </div>


            <div className="cards">
                {
                    [1, 2, 3, 4].map((n) => {
                        return (
                            <>
                                <div>
                                    <CardsSkel />
                                </div>

                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}
