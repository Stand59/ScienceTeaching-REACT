import React, {Component} from 'react';
import { Button, CardBody, CardImg, CardTitle, CardText, Card } from 'reactstrap';


class EighthGrade extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const eighthGrade = this.props.eighthResources.map( eighthResource => {
            return (
                <div key={eighthResource.id} className="col-4">
                    <Card style={{ width: '18rem', height: '26rem', marginTop: '12%', marginBottom: '12%' }}>
                        <a href={eighthResource.link}>
                            <CardImg varient="top" src={eighthResource.image} style={{height: '12rem'}}/>
                        </a>
                        <CardBody style={{backgroundColor: 'blue'}}>
                            <CardTitle>{eighthResource.name}</CardTitle>
                            <CardText>
                                {eighthResource.description}
                            </CardText>
                            <a href={eighthResource.link}>
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
                    <h1>8th Grade Resources</h1>
                </div>
                <div className="row">
                    {eighthGrade}
                </div>
            </div>
        );
    }
}

export default EighthGrade;   