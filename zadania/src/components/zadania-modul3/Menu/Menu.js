import React from "react";
import styled from "styled-components";
import { colors } from "../colors";
import MenuLink from "./MenuLink";

const MenuWrapper = styled.div`
  border: 1px solid ${colors.midnightBlue};
  position: fixed;
  left: 5px;
  top: 33%;
  padding: 4px;
  background: ${colors.sunFlower};
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuLink to='/'>Home</MenuLink>
      <MenuLink to='/about'>About</MenuLink>
      <MenuLink to='contact' isActive={true}>Contact</MenuLink>
      <MenuLink to='posts'>Posts</MenuLink>
    </MenuWrapper>
  )
}

export default Menu;