import React from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const DisplayMainOnScreen = props => {

        return(
            <div>
                <div>
                    <Card>
                        {/* <CardImg top width="100%" src={props.mainProfile.avatar_url} alt="Card image cap" /> */}
                        <CardBody>
        <CardTitle>{props.mainProfile.name}</CardTitle>
                        <CardSubtitle>Github Username: {props.mainProfile.login}</CardSubtitle>
                        <CardText>{props.mainProfile.bio}</CardText>
                        <Button href= 'https://github.com/JosueRodriguez-webdev' >Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
}

export default DisplayMainOnScreen;