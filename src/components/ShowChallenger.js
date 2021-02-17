import { useEffect, useState } from 'react';

function ShowData(props) {
    const [info, setInfo] = useState([])
        
        const myObject = props.data


    useEffect(() => {
        if (props.data) {
            const render = myObject.map((key, index) => {
                return(    
                    <div id="data-div">
                        <li id="summ-list-names"><strong>{myObject[index].summonerName}</strong></li>
                        <p id="summ-list">{myObject[index].wins} wins / {myObject[index].losses} losses</p>
                        <hr />
                    </div>
                )
            })
            setInfo(render)
            // console.log(info);
        }
    })

    return(
        <div>
            <h4><strong>Challenger</strong></h4>
            <p>{info}</p>
        </div>
    )
}

export default ShowData;