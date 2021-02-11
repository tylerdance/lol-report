import { useState } from 'react';

function ShowData(props) {
    // const [info, setInfo] = useState('')
    // console.log(info);

    const myObject = props.data
    console.log(myObject);

    const render = myObject.map(function(key, index) {
    
        return myObject[key]
    })
    console.log(render);


    return(
        <div>
           { render }
        
        </div>
    )
}

export default ShowData;