import styled, { css } from "styled-components";

const modifiers = {
  isLoading: (theme) => css`
    &::before {
      content: "";
      position: absolute;
      inset: 0 0 0 0;
      background-color: rgba(0, 0, 0, 0.2);

      z-index: ${theme.layers.overlay};
    }
  `,
};

export const Container = styled.div`
  ${({ theme, isLoading }) => css`
    width: 800px;
    margin: 2rem auto;

    ${isLoading && modifiers.isLoading(theme)};
  `}
`;

export const CalendarWrapper = styled.div`
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
