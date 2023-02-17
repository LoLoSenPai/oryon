import React from 'react'
import './CustomProductsCard.css'

export default function CustomProductsCard() {
  return (
    <div className="custom-products">
        <h2>Featured Collections</h2>
        <div className="collections">
          <div className="wrapper">
            <div className="grid grid-col-4">
              <div className="card--mod-19">
                  <img className="card__cover" src="https://pbs.twimg.com/profile_images/1565798838446788612/L7rRq666_400x400.jpg" alt="" title=""/>
                  <h2 className="card__title">Degen Dummies</h2>
              </div>
              <div className="card--mod-19">
                  <img className="card__cover" src="https://pbs.twimg.com/profile_images/1433087419046367235/uFYaQEsU_400x400.jpg" alt="" title=""/>
                  <h2 className="card__title">Famous Fox Federation</h2>
              </div>
              <div className="card--mod-19">
                  <img className="card__cover" src="https://pbs.twimg.com/profile_images/1589726014640427014/a-iY-PZO_400x400.jpg" alt="" title=""/>
                  <h2 className="card__title">Ghost Kid DAO</h2>
              </div>
              <div className="card--mod-19">
                  <img className="card__cover" src="https://pbs.twimg.com/profile_images/1609189114473070593/r7AxQyT3_400x400.jpg" alt="" title=""/>
                  <h2 className="card__title">Retro Goons</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
