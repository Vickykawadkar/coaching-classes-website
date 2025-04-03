import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO Mahalaxmi English Institue - MEI ' title='Premier English Language Institute' />
            <p>Master the Art of Confident Communication & Fluent Expression  
            Elevate Your Personality, Build Charisma & Unlock Success</p>
            <div className='button'>
              <button className='primary-btn'>
                CONTACT <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
