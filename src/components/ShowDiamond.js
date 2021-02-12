import { useEffect, useState } from 'react';

function ShowDiamond(props) {
    const [info, setInfo] = useState('')

    const myObject = props.data
    // console.log(myObject);

    const render = myObject.map(function(key, index) {
        return myObject[key]
    })
    // console.log(render);


    const handleSetState = () => {
        setInfo('kremmons')
        // setInfo(props.data[0].summonerName)
        console.log(info);
    }


    return(
        <div>
           {/* <p>{render}</p> */}
        <button className="btn btn-primary" onClick={handleSetState}>Diamond</button>
        <p>{info}</p>
        </div>
    )
}

export default ShowDiamond;