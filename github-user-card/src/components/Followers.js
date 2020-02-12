import React from 'react';

import axios from 'axios';

import DisplayFollowersOnScreen from './DisplayFollowersOnScreen'

class Followers extends React.Component{
    constructor() {
        super();
        this.state = {
            followers: [],
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/JosueRodriguez-webdev/followers`)
        .then((res) => {
                console.log(`SUCCESS! You got data in Followers.js! 1`,res)
                this.setState({followers: res.data}) 
        })
        .catch((err) => {
            console.log(`ERROR, you axios get on the MainProfile component is wrong -- try again in Followers.js! 1`,err)
        })
    }


    render() {
        return (
            <div>
                {this.state.followers.map(followers => (
                    <DisplayFollowersOnScreen followers={followers}/>
                ))
                }
            </div>
        )
    }
}

export default Followers;