import { useEffect, useState } from 'react';
// import React, { Component } from 'react'

function ShowDiamond(props) {
    const [info, setInfo] = useState([])
        
        const myObject = props.data


    useEffect(() => {
        if (props.data) {
            const render = myObject.map((key, index) => {
                return(    
                    <div id="data-div">
                        <li id="summ-list-names"><strong>{myObject[index].summonerName}</strong></li>
                        <hr />
                    </div>
                )
            })
            setInfo(render)
            console.log(info);
        }
    })

    return(
        <div>
            <h4><strong>Diamond</strong></h4>
            <p>{info}</p>
        </div>
    )
}

export default ShowDiamond;


// class ShowDiamond extends Component {
//     constructor(props) {
//         super(props)
//         // console.log('hi');
        
//         console.log(this.props.data);
//         this.state = {
//             info: this.props.data,
//         }
//         console.log(this.state.info);
//     }
    
    
    
    // componentDidMount() {
    //     console.log(this.state.info);


    //     const myObject = this.state.info
    
    //     console.log(myObject);
    //     const render = myObject.map((key, index) => {
    //         return(    
    //             <div id="data-div">
    //                 <li id="summ-list"><strong>{myObject[index].summonerName}</strong></li>
    //                 {/* <p id="summ-list">{myObject[index].wins} wins / {myObject[index].losses} losses</p> */}
    //                 <hr />
    //             </div>
    //         )
    //     })
    //     console.log(render);

        // await this.setState({ info: render })


        // await this.setState({ info: render })
        // console.log(this.state.info);
        // console.log(render);

    // }

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



