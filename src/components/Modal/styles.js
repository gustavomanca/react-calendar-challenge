import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 2;

    border-radius: 1.2rem;
    height: 400px;
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    width: 50vw;

    background-color: ${theme.colors.lightest};
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.1);

    transform: translate(-50%, -50%);
  `}
`;

export const Close = styled.button`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    top: 0;

    border: none;
    border-radius: 0 ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall};
    height: ${theme.spacings.xlarge};
    padding: 0;
    width: ${theme.spacings.xlarge};

    background-color: transparent;
    cursor: pointer;

    transition: background-color 0.3s ease;
    will-change: background-color;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;

      border-radius: ${theme.spacings.small};
      height: 2px;
      width: ${theme.spacings.xsmall};

      background-color: #000;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover {
      background-color: ${theme.colors.lightGray};
    }
  `}
`;

export const Title = styled.h3``;
