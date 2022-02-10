import React, {Component} from 'react';
import { Button, CardBody, CardImg, CardTitle, CardText, Card } from 'reactstrap';


class Biology extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const biology = this.props.biologyResources.map( biologyResource => {
            return (
                <div key={biologyResource.id} className="col-4">
                    <Card style={{ width: '18rem', height: '26rem', marginTop: '12%', marginBottom: '12%' }}>
                        <a href={biologyResource.link}>
                            <CardImg varient="top" src={biologyResource.image} style={{height: '12rem'}}/>
                        </a>
                        <CardBody style={{backgroundColor: 'blue'}}>
                            <CardTitle>{biologyResource.name}</CardTitle>
                            <CardText>
                                {biologyResource.description}
                            </CardText>
                            <a href={biologyResource.link}>
                                <Button variant="primary">Explore</Button>
                            </a>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <h1>Biology Resources</h1>
                </div>
                <div className="row">
                    {biology}
                </div>
            </div>
        );
    }
}

export default Biology;   