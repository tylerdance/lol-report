import { useEffect, useState } from 'react';

function ShowDiamond(props) {
    const [info, setInfo] = useState('')

    const myObject = props.data

    const handleSetState = () => {
        console.log(myObject);
        setInfo(myObject)
        console.log(info);
        const render = myObject.map((key, index) => {
            return <li id="summ-list">{myObject[index].summonerName}</li>
        })
        console.log(render);
        setInfo(render)
        console.log(info);
    }


    return(
        <div>
            <button className="btn btn-primary" onClick={handleSetState}>Diamond</button>
            <p>{info}</p>
        </div>
    )
}

export default ShowDiamond;