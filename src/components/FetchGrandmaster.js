import React, { Component } from 'react'
import axios from 'axios'
import ShowChallenger from './ShowChallenger'
import ShowMaster from './ShowMaster'
import ShowGrandmaster from './ShowGrandmaster'
import ShowDiamond from './ShowDiamond'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class FetchGrandmaster extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/api/request/grandmaster`).then(response => {
            // console.log('Data fetched', response)
            this.setState({
                data: response.data
            })
            // console.log('data', this.state.data);
          
        })
    }

    render() {
        return (
            <div className="home">
           
                <ShowGrandmaster data={this.state.data} />
        
            </div>
        )
    }
}

export default FetchGrandmaster;