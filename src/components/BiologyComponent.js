import React, {Component} from 'react';
import { Button, CardBody, CardImg, CardTitle, CardText, Card } from 'reactstrap';


class Biology extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const biology = this.props.biologyResources.map( biologyResource => {
            return (
                <div className="col">
                    <div key={biologyResource.id} style={{
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
                                src={biologyResource.image}
                                style={{height: '140px' }}
                            />
                            <CardTitle style={{
                                fontSize: '20px',
                                color: '#000000'
                            }}>
                                {biologyResource.name}
                            </CardTitle>
                            <CardText style={{
                                fontSize: '12px',
                                color: '#000000'
                            }}>
                                {biologyResource.description}
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
            <div className="container">
                <div className="row">
                    <div className="col-12" style={{marginTop: '5%'}}>
                        <h1>Biology Resources</h1>
                    </div>
                </div>
                <div className="row">
                    {biology}
                </div>
            </div>
        );
    }
}

export default Biology;   