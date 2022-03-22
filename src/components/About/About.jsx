import React from "react";
import {
  Contact,
  Container,
  Image,
  ImageContainer,
  Left,
  Right,
  TechnologiesContainer,
} from "./StyledAbout";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import nodejs from "../../images/nodejs.svg";
import express from "../../images/express.svg";
import postgresql from "../../images/postgresql.svg";
import sequelize from "../../images/sequelize.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <Container>
      <Left className="about-description">
        <h2>ABOUT THIS SPA</h2>
        <span>implemented technologies: </span>
        <TechnologiesContainer>
          <ImageContainer>
            <Image src={react} />
          </ImageContainer>
          <ImageContainer>
            <Image src={redux} />
          </ImageContainer>
          <ImageContainer>
            <Image src={nodejs} />
          </ImageContainer>
          <ImageContainer>
            <Image src={express} />
          </ImageContainer>
          <ImageContainer>
            <Image src={postgresql} />
          </ImageContainer>
          <ImageContainer>
            <Image src={sequelize} />
          </ImageContainer>
        </TechnologiesContainer>

        <p>
          Doggies is a web app, it is the individual project of the soyHenry
          bootcamp, being one of the 2 required projects.
        </p>
        <p>
          The technologies used here are Express, Sequelize, PostgreSQL, React,
          Redux, and Styled Components for the styles. This application uses the
          API The Dog Api to obtain information about all the dogs breeds in the
          world, store them in a local database, require and work them from the
          API itself.
        </p>
      </Left>

      <Right>
        <h3>Contact Me</h3>
          <Contact>
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/francisco-gimenez-5419b3218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </Contact>
          <Contact>
            <span>GitHub</span>
            <a
              href="https://github.com/FranGimenez98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
          </Contact>
          <Contact>
            <span>Gmail</span>
            <a
              href="mailto:franrattlehead98@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail className="icon" />
            </a>
          </Contact>
      </Right>
    </Container>
  );
};

export default About;
