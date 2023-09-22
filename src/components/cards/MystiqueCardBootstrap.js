import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

//TODO componente extraido de mystique
const InMystiqueCardBootstrap = (props) => {
  const { href, srcImage, name, sendPriceText, description, onClick } =
    props;
  return (
    <Card className="card-d-boots" style={{ width: "18rem" }} href={href}>
      <Card.Img variant="top" src={srcImage} />
      <Card.Body>
      <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" className="w-100 text-white" onClick={onClick}>{sendPriceText}</Button>
      </Card.Body>
    </Card>
  );
};

export default InMystiqueCardBootstrap;
