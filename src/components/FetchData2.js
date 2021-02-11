import React, { Component } from 'react'
import axios from 'axios'
import ShowData from './ShowData'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class FetchData2 extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/api/request/request`).then(response => {
            console.log('Data fetched', response)
            this.setState({
                data: response.data
            })
            console.log('data', this.state.data);
          
        })
    }

    render() {
        return (
            <div className="home">
                <ShowData data={this.state.data} />
            </div>
        )
    }
}

export default FetchData2;