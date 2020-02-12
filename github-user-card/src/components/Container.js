import React from 'react';

import MainProfile from './MainProfile.js';
import Followers from './Followers.js'

class Container extends React.Component {
    render() {
        return (
            <div>
                <MainProfile/>
                <Followers/>
            </div>
        )
    }
}

export default Container;