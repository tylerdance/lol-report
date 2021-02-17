import React, { Component } from 'react'
import axios from 'axios'
import ShowDiamond from './ShowDiamond'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class FetchDiamond extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/api/request/diamond`).then(response => {
            // console.log('Data fetched', response)
            
            this.setState({
                data: response.data
            })

            const myObject = this.state.data
    
            // console.log(myObject);
            const render = myObject.map((key, index) => {
                return(    
                    <div id="data-div">
                        <li id="summ-list"><strong>{myObject[index].summonerName}</strong></li>
                        {/* <p id="summ-list">{myObject[index].wins} wins / {myObject[index].losses} losses</p> */}
                        <hr />
                    </div>
                )
            })
            // console.log(render);

            // console.log('data', this.state.data);
          
        })
        .catch(err => {
            console.log(err);
        })
    }


    render() {
        return (
            <div className="home">
      
                <ShowDiamond data={this.state.data} /> 
            </div>
        )
    }
}

export default FetchDiamond;