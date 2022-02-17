import React, {Component} from 'react';
import { Button, CardBody, CardImg, CardTitle, CardText, Card } from 'reactstrap';


class EighthGrade extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const eighthGrade = this.props.eighthResources.map( eighthResource => {
            return (
                <div className="col">
                    <div key={eighthResource.id} style={{
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'center',
                    }}>
                        <Card>
                            <CardImg 
                                src={eighthResource.image}
                            />
                            <CardTitle>
                                {eighthResource.name}
                            </CardTitle>
                            <CardText>
                                {eighthResource.description}
                            </CardText>
                        </Card>
                    </div>
                </div>
            );
        });
        return (
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-12" style={{marginTop: '5%'}}>
                        <h1>8th Grade Resources</h1>
                    </div>
                </div>
                <div className="row">
                    {eighthGrade}
                </div>
            </div>
        );
    }
}

export default EighthGrade;   