import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="landing-container">

      <div className="homepage-container">
        <h1>Start your journey to a healthier life.</h1>
        <hr />
        <Link to="/auth/register">
          <button className="btn">Get started</button>
        </Link>

      </div>

      <div className="content-container">
        <div className="landingpage-content">
          <img src="https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_960_720.jpg" alt="filler-text" />
          <div className="content">
            <h2>Custom training plan</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem molestias deserunt, fuga debitis consequatur voluptas pariatur, ipsa labore eligendi porro maxime illum placeat recusandae ipsum beatae ipsam temporibus at.</p>
            <button className="btn">Learn more</button>
          </div>
        </div>
        <div className="landingpage-content">
          <div className="content">
            <h2>Custom training plan</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem molestias deserunt, fuga debitis consequatur voluptas pariatur, ipsa labore eligendi porro maxime illum placeat recusandae ipsum beatae ipsam temporibus at.</p>
            <button className="btn">Learn more</button>
          </div>
          <img src="https://cdn.pixabay.com/photo/2017/08/01/12/00/people-2564757_960_720.jpg" alt="filler-text" />

        </div>
        <div className="landingpage-content">
          <img src="https://cdn.pixabay.com/photo/2017/07/17/15/41/silhouette-2512805_960_720.jpg" alt="filler-text" />

          <div className="content">
            <h2>Custom training plan</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quidem molestias deserunt, fuga debitis consequatur voluptas pariatur, ipsa labore eligendi porro maxime illum placeat recusandae ipsum beatae ipsam temporibus at.</p>
            <button className="btn">Learn more</button>
          </div>

        </div>

      </div>
    </div>
  )
}
