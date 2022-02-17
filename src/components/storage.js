<Card style={{ width: '18rem', height: '26rem', marginTop: '12%', marginBottom: '12%', }}>
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