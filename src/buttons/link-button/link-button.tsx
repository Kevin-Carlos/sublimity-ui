import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../theme";

export type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkButton: FC<LinkButtonProps> = (props) => {
  return (
    <StyledALink {...props} target="_blank" rel="noreferrer">
      <Underline />
      {props.children}
    </StyledALink>
  );
}

const Underline = styled.hr`
  color: ${colors.orange} !important;
  border-width: 0px;
  position: absolute;
  bottom: -1rem;
  left: 0;
  width: 0;
  transition: all 0.2s ease-in-out;
`;

const StyledALink = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${colors.white};
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.2);
    ${Underline} {
      border-width: 1px;
      width: 2rem;
      color: ${colors.orange} !important;
    }
  }
`;
