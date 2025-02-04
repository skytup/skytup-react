import React from 'react'
// import '../source/hero.css'
import image from '../image/pari.png'
import Card from './card'
export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero_container">
                    <h1>Welcome To Skytup</h1>
                    <p>We're here to help you in your coding journey</p>
                    <div className="search-box">
                        <input type="search" placeholder="Search For Skytup Blogs" />
                        <button><i className='fa fa-search'></i></button>
                    </div>
                </div>
            </section>
            <Card />
        </>
    )
}
