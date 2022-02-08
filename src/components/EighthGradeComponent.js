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
                },
                {
                    id: 1,
                    name: 'Legends of Learning',
                    image: 'assets/images/LegendsOfLearning.png',
                    link: 'https://games.legendsoflearning.com/game/sun-bubble-popper/38?partner=legends-public&media=video',
                    description: 'Not a free resource, but can gain access to multiple online games that introduce planet science.'
                },
                {
                    id: 1,
                    name: 'Legends of Learning',
                    image: 'assets/images/LegendsOfLearning.png',
                    link: 'https://games.legendsoflearning.com/game/sun-bubble-popper/38?partner=legends-public&media=video',
                    description: 'Not a free resource, but can gain access to multiple online games that introduce planet science.'
                },
                {
                    id: 1,
                    name: 'Legends of Learning',
                    image: 'assets/images/LegendsOfLearning.png',
                    link: 'https://games.legendsoflearning.com/game/sun-bubble-popper/38?partner=legends-public&media=video',
                    description: 'Not a free resource, but can gain access to multiple online games that introduce planet science.'
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
                <div key={resource.id} className="col-4">
                    <Card style={{ width: '18rem', height: '26rem', marginTop: '12%', marginBottom: '12%' }}>
                        <a href={resource.link}>
                            <CardImg varient="top" src={resource.image} style={{height: '12rem'}}/>
                        </a>
                        <CardBody style={{backgroundColor: 'blue'}}>
                            <CardTitle>{resource.name}</CardTitle>
                            <CardText>
                                {resource.description}
                            </CardText>
                            <a href={resource.link}>
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
                    {eighthGrade}
                </div>
            </div>
        );
    }
}

export default EighthGrade;   