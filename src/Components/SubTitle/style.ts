import styled from "styled-components";
import { Props } from ".";

export const StyledSubTitulo = styled.h2<Props>`
    font-size: ${({ size }) => (size === 'ParagraphPrincipal' ? '26px' : '21px')};
      color: ${({ color }) => (color === 'Black' ? 'black' : '#fffff')};
      margin-bottom:10px;
`