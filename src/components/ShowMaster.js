import { useState } from 'react';

function ShowMaster(props) {
    const [info, setInfo] = useState('')

    const myObject = props.data

    const handleSetState = () => {
        console.log(myObject);
        setInfo(myObject)
        console.log(info);
        const render = myObject.map((key, index) => {
            return(    
                <div id="data-div">
                    <li id="summ-list-names"><strong>{myObject[index].summonerName}</strong></li>
                    <p id="summ-list">{myObject[index].wins} wins / {myObject[index].losses} losses</p>
                    {/* <p id="summ-list"></p> */}
                    <hr />
                </div>
            )
        })
        console.log(render);
        setInfo(render)
        console.log(info);
    }


    return(
        <div>
            <button id="tier-button" className="btn btn-primary" onClick={handleSetState}><strong>Master</strong></button>
            <p>{info}</p>
        </div>
    )
}

export default ShowMaster;