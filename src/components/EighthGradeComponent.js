import React, {Component} from 'react';
import { Button, CardBody, CardImg, CardTitle, CardText, Card } from 'reactstrap';

class EighthGrade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: [
                {
                    id: 0,
                    name: 'PBS Organization of the Periodic Table',
                    image: 'assets/images/PBS.jpg',
                    link: 'https://www.pbs.org/video/chemistry-physics-chemistry-402-organization-periodic-table/',
                    description: 'A 28 minute long explanation as to how the periodic table is organized.',
                    type: 'Video'
                },
                {
                    id: 1,
                    name: 'Legends of Learning',
                    image: 'assets/images/LegendsOfLearning.png',
                    link: 'https://games.legendsoflearning.com/game/sun-bubble-popper/38?partner=legends-public&media=video',
                    description: 'Not a free resource, but can gain access to multiple online games that introduce planet science.'
                }
            ],
        };
    }

    render() {
        const eighthGrade = this.state.resources.map( resource => {
            return (
                <div className="col">
                    <Card style={{ width: '18rem' }}>
                        <CardImg varient="top" src={resource.image}/>
                        <CardBody>
                            <CardTitle>{resource.name}</CardTitle>
                            <CardText>
                                {resource.description}
                            </CardText>
                            <Button variant="primary">Go somewhere</Button>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {eighthGrade}
                </div>
            </div>
        );
    }
}

export default EighthGrade;   