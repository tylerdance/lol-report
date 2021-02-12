import { useEffect, useState } from 'react';

function ShowData(props) {
    const [info, setInfo] = useState('')

    const myObject = props.data
    // console.log(myObject);

    // const render = myObject.map(function(key, index) {
    //     return myObject[key]
    // })
    // console.log(render);


    const handleSetState = () => {
        setInfo(props.data[0].summonerName)
        // console.log(myObject);
        // const render = myObject.map(function(key, index) {
        //     return myObject[key]
        // })
        // setInfo(render)
        console.log(info);
        // setInfo(render)
    }


    return(
        <div>
           {/* <p>{render}</p> */}
        <button className="btn btn-primary" onClick={handleSetState}>Challenger</button>
        <p>{info}</p>
        </div>
    )
}

export default ShowData;