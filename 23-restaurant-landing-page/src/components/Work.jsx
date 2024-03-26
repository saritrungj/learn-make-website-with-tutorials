import React from 'react'
import pickMealImage from '../images/pick-meals-image.png'
import chooseOftenImage from '../images/choose-image.png'
import deliveriesImage from '../images/delivery-image.png'

const Work = () => {
  return (
    <>
      <section className="section container">
        <div className="work-container">
          <div className="work-intro">
            <h5>
              Work
            </h5>
            <h1>
              How It Works
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, voluptatem veritatis veniam fuga sit delectus maxime temporibus. Consectetur quas a, natus maxime corporis delectus illum recusandae cumque expedita dignissimos doloremque?
            </p>
          </div>
          <div className="work-card">
            <div className="card">
              <div className="card-image">
                <img src={pickMealImage} alt="card-image" />
              </div>
              <div className="card-title">
                <p>
                  Pick Meals
                </p>
              </div>
              <div className="card-detail">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, laboriosam laudantium adipisci id reiciendis aliquam labore commodi eveniet dignissimos placeat.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={chooseOftenImage} alt="card-image" />
              </div>
              <div className="card-title">
                <p>
                  Choose How Often
                </p>
              </div>
              <div className="card-detail">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, laboriosam laudantium adipisci id reiciendis aliquam labore commodi eveniet dignissimos placeat.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={deliveriesImage} alt="card-image" />
              </div>
              <div className="card-title">
                <p>
                  Fast Deliveries
                </p>
              </div>
              <div className="card-detail">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, laboriosam laudantium adipisci id reiciendis aliquam labore commodi eveniet dignissimos placeat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work