import { useEffect, useState } from 'react';
// import React, { Component } from 'react'

function ShowDiamond(props) {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
        
    const myObject = props.data

    useEffect(async () => {
        const render = myObject.map((key, index) => {
            return(    
                <div id="data-div">
                    <li id="summ-list-names"><strong>{myObject[index].summonerName}</strong></li>
                    <p id="summ-list">{myObject[index].wins} wins / {myObject[index].losses} losses</p>
                    <hr />
                </div>
            )
        })
        await setInfo(render)
        setLoading(false)
        // console.log(info);

    }, [props.data])

    return(
        <div>
            <h4 className="tier-header"><strong>Diamond</strong></h4>
            <p>{loading === true ? <p>Loading...</p> : info}</p>
        </div>
    )
}

export default ShowDiamond;


