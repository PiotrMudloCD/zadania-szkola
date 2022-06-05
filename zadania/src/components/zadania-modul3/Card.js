import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleH, faEllipsisVertical, faHeart, faShareNodes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import { colors } from "./colors";
import Paella from '../../assets/paella.jpg';

const CardWrapper = styled.div`
  max-width: 345px;
  background: ${colors.clouds};
  border-radius: 5px;
  margin: 60px 0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;

  p {
    font-size: 14px;
    text-align: left;
    margin: 0
  }
`;

const Header = styled.h2`
margin: 0;
font-family: "Roboto","Helvetica","Arial",sans-serif;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.43;
letter-spacing: 0.01071em;
text-align: left;
`;

const Icon = styled.span`
  width: 20%;
  color: #f44336;
  font-size: 3rem;
  text-align: left;
`;

const IconCenter = styled(Icon)`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
color: grey;
margin: auto;
border-radius: 50%;
width: 45px;
height: 45px;
cursor: pointer;

:hover {
  background: rgba(0, 0, 0, 0.04);
}
`;

const IconShowMore = styled(IconCenter)`
  background: ${props => props.active === true ? 'rgba(0, 0, 0, 0.04)' : ''};
  transform: ${props => props.active === true ? 'rotate(180deg)' : 'none'};

  svg {
    transform: scale(0.8);
  }
`;

const Image = styled.img`
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const Para = styled.p`
  padding: 16px;
  text-align: left;
  margin: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = ({ title, intro, content }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleShowMore = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <CardWrapper>
      <HeaderWrapper>
      <Icon><FontAwesomeIcon icon={faCircleH} /></Icon>
        <HeaderContent>
          <Header>{title}</Header>
          <p>September 14, 2016</p>
        </HeaderContent>
        <Buttons>
          <IconCenter><FontAwesomeIcon icon={faEllipsisVertical} /></IconCenter>
        </Buttons>
      </HeaderWrapper>
      <Image src={Paella} />
      <ContentWrapper>
        <Para>{intro}</Para>
      </ContentWrapper>
      <ButtonsWrapper>
        <Buttons>
          <IconCenter><FontAwesomeIcon icon={faHeart} /></IconCenter>
          <IconCenter><FontAwesomeIcon icon={faShareNodes} /></IconCenter>
        </Buttons>
        <Buttons>
          <IconShowMore active={isOpen} onClick={handleShowMore}><FontAwesomeIcon icon={faChevronDown} /></IconShowMore>
        </Buttons>
      </ButtonsWrapper>
      {isOpen === true && <ContentWrapper><Para>{content}</Para></ContentWrapper>}
    </CardWrapper>
  );
};

export default Card;
