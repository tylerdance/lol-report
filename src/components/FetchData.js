import axios from 'axios'
import { useState } from 'react';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function FetchData(props) {
    const [data, setData] = useState('')
    // const name = props.summName.map((p, index) => {
        
    // })
    axios.get(`${REACT_APP_SERVER_URL}/api/request/request`)
    .then(res => {
        console.log(res.data[0].summonerName);
        setData(res.data[0].summonerName)
        // console.log(res.data.entries[0].summonerName);
        // setData(res.data.entries[0].summonerName)

    })

    return(
        <div>
            {data}
        </div>
    )
}

export default FetchData;