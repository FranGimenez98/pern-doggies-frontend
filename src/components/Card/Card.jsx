import React from "react";
import { Container, Image, InfoContainer } from "./StyledCard";
import { Link } from "react-router-dom";


const Card = ({ image, name, breed_group,id }) => {
  return (
    <Container>
      <Image src={image} alt="image_dog" image={image}/>
      <InfoContainer>
        <h1>{name}</h1>
        <span>Breed Group: </span>
        <span className="span">{breed_group}</span>
        <div>
          <Link to={`/dogs/${id}`}>
            <button>Details</button>
          </Link>
        </div>
      </InfoContainer>
    </Container>
  );
};

export default Card;
