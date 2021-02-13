import { useEffect, useState } from 'react';
// import React, { Component } from 'react'

function ShowDiamond(props) {
    const [info, setInfo] = useState('')

    const myObject = props.data

    // useEffect(() => {
    //     console.log(props.data);

    // })

    const handleSetState = () => {
        setInfo(myObject)
        console.log(info);
        const render = myObject.map((key, index) => {
            return(    
                <div id="data-div">
                    <li id="summ-list"><strong>{myObject[index].summonerName}</strong></li>
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
            <h4 id="tier-button" className="btn btn-primary" onClick={handleSetState}><strong>Diamond</strong></h4>
            <p>{info}</p>
        </div>
    )
}

export default ShowDiamond;


// class ShowDiamond extends Component {
//     constructor(props) {
//         super(props)
        
//         this.state = {
//             info: '',
//         }
//         console.log(this.props.data);
//     }
    
    
    
//     componentDidMount() {
//         // console.log(myObject);
//         // console.log(this.props.data);
//         // const myObject = this.props.data
//         // this.setState = { info: myObject }
//         // console.log(this.state.info);
//         // setInfo(myObject)
//         // console.log(info);
//         // const render = myObject.map((key, index) => {
//         //     return(    
//         //         <div id="data-div">
//         //             <li id="summ-list"><strong>{myObject[index].summonerName}</strong></li>
//         //             <p id="summ-list">{myObject[index].wins} wins / {myObject[index].losses} losses</p>
//         //             <hr />
//         //         </div>
//         //     )
//         // })
//         // this.setState = { info: 'hi' }
//         // console.log(this.state.info);
//         // console.log(render);
//         // setInfo(render)
//     }

//     render() {
//         return (
//             <div className="home">
//                 <h6>Diamond</h6>
//                 {/* {this.state.info} */}

//             </div>
//         )
//     }
// }

// export default ShowDiamond;