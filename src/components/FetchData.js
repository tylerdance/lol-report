import axios from 'axios'
import { useState } from 'react';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function FetchData(props) {
    // const [data, setData] = useState('')

    // console.log(res.data[0].summonerName);
    // setData(res.data[0].summonerName)

    const data = props.info.map((p, index) => {


        axios.get(`${REACT_APP_SERVER_URL}/api/request/request`)
        .then(res => {
            const info = res.data
        })

    })

    return(
        <div>
            {data}
        </div>
    )
}

export default FetchData;