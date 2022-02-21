import React, {Component} from 'react';
import {CardImg, CardTitle, CardText, Card, Button} from 'reactstrap';



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
                        <Card style={{
                            width: '200px', 
                            marginTop: '20px',
                            marginBottom: '20px',
                            backgroundColor: '#006bb3',
                            height: '325px'
                        }}>
                            <CardImg 
                                className="img-fluid"
                                src={eighthResource.image}
                                style={{height: '140px' }}
                            />
                            <CardTitle style={{
                                fontSize: '20px',
                                color: '#000000'
                            }}>
                                {eighthResource.name}
                            </CardTitle>
                            <CardText style={{
                                fontSize: '12px',
                                color: '#000000'
                            }}>
                                {eighthResource.description}
                            </CardText>
                            <Button style={{
                                position: 'absolute',
                                bottom: '10px',
                                left: '47px',
                                width: '50%',
                                backgroundColor: '#000000',
                            }}>
                                Explore
                            </Button>
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