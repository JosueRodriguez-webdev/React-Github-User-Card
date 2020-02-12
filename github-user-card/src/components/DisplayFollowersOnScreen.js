import React from 'react';

import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const DisplayFollowersOnScreen = ({ followers }) => {
    const { login } = followers
        return(
            <div>
                <div>
                    <Card>
                        <CardImg top width="100%" src='imput picture here' alt="Card image cap" />
                        <CardBody>
        <CardTitle>{login}</CardTitle>
                        <CardText>hi</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
}

export default DisplayFollowersOnScreen;