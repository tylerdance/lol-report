import React, { Component } from 'react'
import axios from 'axios'
import ShowGrandMaster from './ShowGrandMaster'

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
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="home">
           
                <ShowGrandMaster data={this.state.data} />
        
            </div>
        )
    }
}

export default FetchGrandmaster;