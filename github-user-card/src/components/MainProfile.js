import React from 'react'
import axios from 'axios'

import DispalyMainOnScreen from './DisplayMainOnScreen'

class MainProfile extends React.Component {
    constructor() {
        super();
        this.state={
            mainProfile: [],
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/JosueRodriguez-webdev`)
        .then((res) => {
                console.log(`SUCCESS! You got data!`,res)
                this.setState({mainProfile: res.data}) 
        })
        .catch((err) => {
            console.log(`ERROR, you axios get on the MainProfile component is wrong -- try again`,err)
        })
    }


    render() {
        return(
            <div>
                <DispalyMainOnScreen mainProfile={this.state.mainProfile}/>
            </div>
        )
    }
}

export default MainProfile;