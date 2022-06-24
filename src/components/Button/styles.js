import styled, { css } from "styled-components";

export const Container = styled.button`
  ${({ theme }) => css`
    height: ${theme.spacings.xlarge};

    border: none;
    border-radius: 0.4rem;
    padding: 0 ${theme.spacings.xsmall};

    background-color: ${theme.colors.primary};
    color: ${theme.colors.lightest};

    cursor: pointer;
  `}
`;
