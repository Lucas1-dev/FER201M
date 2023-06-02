import React from 'react'
import { Players } from '../../shared/ListOfPlayer'
import '../Player/Player.css'
import { useState } from 'react';
export default function PlayersPre() {

  const [player, setPlayer] = useState([])
  return (
    <div className="container-fluid">
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
                <button className='btn btn-outline-success' onClick={() => { setPlayer(player) }}><a href='#popup1' id='openPopUp'>Detail</a></button>
              </div>
            </div>
          </div>
        ))}
        <div id='popup1' className='overlay'>
          <div className='popup'>
            <img src={player.img} alt='/' />
            <h2>{player.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>{player.info}</div>
          </div>
        </div>
        {/*TEST  */}
      </div>
    </div>


  )
}
