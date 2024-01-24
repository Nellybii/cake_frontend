import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardbody() {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='src/utils/cake.avif' style={{
            width: '100%',
            height: '30vh',
            objectFit: 'contain', // Fixing syntax errors and formatting
          }}/>
                <Card.Body >
                    <Card.Title>Red Velvet Cake</Card.Title>
                    <Card.Text>
                        Red Velvet Cake
                    </Card.Text>
                    <Button variant="dark" size="sm" className=" rounded-pill ">Buy now</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cardbody

