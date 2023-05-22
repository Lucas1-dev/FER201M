import React from 'react'
import { Players } from '../../shared/ListOfPlayer'
import '../Player/Player.css'
export default function PlayersPre(player) {
  console.log(Players);
  return (
    <div className="container-fluid">
      <div className=''>
      <div className='nav__card'>

          {Players.map((player) => (
            <div className='card text-center'>
              <div key={player.id} className=''>
                <div className='overflow'>
                  <img src={player.img} className='card-img-top' />
                </div>
                <div className='card-body text-dark'>
                  <h3>{player.name}</h3>
                  <p className='title'>{player.club}</p>
                  <p className='btn btn-outline-success'>Detail</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
  )
}
