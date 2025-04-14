import React from 'react'
import Title from './Title'
import { tours } from '../data.js'
import Tour from './Tour.js'

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="Tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}

export default Tours
