import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 0 32px;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.medium} ${theme.spacings.small};

    background-color: ${theme.colors.lightest};
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.1);
  `}
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.8rem;
`;
