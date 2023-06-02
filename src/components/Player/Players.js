
import React from 'react'
import { Players } from '../../shared/ListOfPlayer';
import { Link } from 'react-router-dom';
import "../Player/Player.css"
export default function Player() {
  return (
    <div className="container-fluid">
      <div className=''>
        <div className='nav__card'>

          {Players.map((player) => (
            <div className='card text-center'>
              <div key={player.id} className=''>
                <div className='overflow'>
                  <img src={player.img} className='card-img-top' alt=''/>
                </div>
                <div className='card-body text-dark'>
                  <h3>{player.name}</h3>
                  <p className='title'>{player.club}</p>
                  <Link to={`detail/${player.id}`}>
                    <p><button>Detail</button></p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
