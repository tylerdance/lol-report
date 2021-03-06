import React, { Component } from 'react'
import axios from 'axios'

import ShowMaster from './ShowMaster'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class FetchMaster extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/api/request/master`).then(response => {
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
                <ShowMaster data={this.state.data} />
            </div>
        )
    }
}

export default FetchMaster;