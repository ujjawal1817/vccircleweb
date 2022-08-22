import React from 'react'
import './skeleton.css'
export default function CardsSkel() {
    return (
        <>
            <div className='resp-card'>
                <div className="card-img">
                    <img alt='' className='card-img'/>
                </div>
                <div className='resp-card-detail'>
                    <p className="card-heading"></p>
                    <p className="card-title-skel"></p>
                    <div className="card-authorskel">
                    <span className="card-date"></span>
                    <span className="card-author-name"></span>
                    </div>
                </div>
                
            </div>

        </>
    )
}
