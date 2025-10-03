import React from 'react'
import johnImage  from '../assets/johnSmith.png'

const HomePage = () => {
  return (
    <section>
      <div className="container w-75">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className='display-3'>John Smith</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, amet.</p>
            <button className='btn btn-warning'>Click here for more</button>
          </div>
          <div className="col-12 col-md-6">
            <img src={johnImage} alt='john' className='img-fluid w-75' />
</div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
