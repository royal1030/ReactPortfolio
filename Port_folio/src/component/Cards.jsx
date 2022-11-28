import React from 'react';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={props.img} width={200} height={200} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <div className="d-flex">
        <a href={props.demoLink}role="button"className="btn btn-outline-info">Demo Link</a>
        <a href={props.gitLink}role="button"className="btn btn-outline-success">Github Link</a>
        {/* <button type="button" class="btn btn-outline-success">Github Link</button> */}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;