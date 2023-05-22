import React from 'react'
import { Players } from '../../shared/ListOfPlayer'
export default function PlayerMap() {
  return (
    <div className="container-fluid">
      {Players.map((player) => (
        
          <div key={player.id} className='column'>
            <div className="row row d-inline-flex">
              <div className="col-12 col-sm-6 col-md-4 p-2">
              <div className="d-flex flex-column text-center border height100">
                  <div className='card'>
                    <img className="card-img-top" src={player.img} alt="Card image" style="width:100%" />
                    <div className="card-body">
                      <h3 className="card-title">{player.name}</h3>
                      <p className="card-title">{player.club}</p>
                      <a href="#" className="btn btn-primary">Detail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      ))}
    </div>
  )
}
