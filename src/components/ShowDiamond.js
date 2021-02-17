import { useEffect, useState } from 'react';
// import React, { Component } from 'react'

function ShowDiamond(props) {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
        
    const myObject = props.data

    useEffect(async () => {
        const render = await myObject.map((key, index) => {
            return(    
                <div id="data-div">
                    <li id="summ-list-names"><strong>{myObject[index].summonerName}</strong></li>
                    <p id="summ-list">{myObject[index].wins} wins / {myObject[index].losses} losses</p>
                    <p id="summ-list">LP: {myObject[index].leaguePoints}</p>
                    <hr />
                </div>
            )
        })
        await setInfo(render)
        if (render) {
            setLoading(false)

        }
        // console.log(info);

    }, [props.data])

    // if (loading === false) {
    //     document.getElementById('loading').style.display = "block"
    // } else {
    //     return
    // }

    return(
        <div>
            {/* <h4 className="tier-header"><strong>Diamond</strong></h4> */}
            <p>{info}</p>
        </div>
    )
}

export default ShowDiamond;


