import styled, { css } from "styled-components";

export const Container = styled.p`
  ${({ theme }) => css`
    border-radius: 0.4rem;
    margin: 0 0 0.4rem;
    padding: 0 2px;
    width: 100%;

    background-color: ${theme.colors.label};

    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    transition: transform 0.3s ease;
    will-change: transform;

    &:hover {
      transform: scale(1.02);
    }
  `};
`;

export const DayLabel = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    padding: ${theme.spacings.small};

    > *:not(:last-child) {
      margin: 0 0 ${theme.spacings.xsmall};
    }
  `};
`;
