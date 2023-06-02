import React, { Component } from 'react'
import { Players } from '../../shared/ListOfPlayer';
import PlayersPre from './PlayersPre';
export class Main extends Component {
    constructor(){
        super();
        this.state = {
            players: Players
        };
    }
    render(){
        return <PlayersPre players = {this.state.players}/>
    }
}


export default Main;   

