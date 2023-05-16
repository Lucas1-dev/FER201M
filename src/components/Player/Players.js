import React from 'react'
import { Players } from '../../shared/ListOfPlayer'
export default function PlayerMap() {
  return (
    <div className='container'>
        {Players.map((player)=>(
            <div key={player.id} className='column'>
                <div className='card'>
                    <div>
                    <img src={player.img}/>
                    <h3>{player.name}</h3>
                    <p className='title'>{player.club}</p>
                    <p><button>Detail</button></p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
