import "../Styles/List.css"
import React from 'react'
import List from './list'

export default function Ranking(){
    return (
        <div className="tableauRank">
            <h1>Leaderboard</h1>
            <hr className="lignStyle"></hr>
            <List></List>
        </div>

    )
}