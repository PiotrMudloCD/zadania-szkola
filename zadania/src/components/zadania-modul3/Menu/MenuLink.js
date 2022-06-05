import React from "react";

import styled from 'styled-components';
import { colors } from "../colors";

const Link = styled.div`
  border: 1px solid ${colors.sunFlower};
  background: ${props => props.isActive === true ? colors.turquoise : colors.nephritis};
  padding: 15px;

  :hover {
    background: ${colors.turquoise};
  }

  a {
    text-decoration: none;
    color: ${colors.midnightBlue};
    text-align: center;
    font-size: 24px;
    font-weight: 400;
  }
`;

const MenuLink = ({to, isActive, children}) => {
  return (
    <Link isActive={isActive}>
      <a href={to}>{children}</a>
    </Link>
  )
}

export default MenuLink;