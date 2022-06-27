import styled, { css } from "styled-components";

export const Container = styled.span`
  ${({ theme }) => css`
    & {
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: ${theme.layers.alwaysOnTop};

      width: 6.4rem;
      height: 6.4rem;
      border: 1rem solid transparent;
      border-radius: 50%;
      transform: rotate(45deg) translate(-50%, -50%);
      box-sizing: border-box;
    }

    &::before {
      content: "";
      position: absolute;
      box-sizing: border-box;
      inset: -1rem;
      border-radius: 50%;
      border: 1rem solid ${theme.colors.primary};
      animation: prixClipFix 1.5s infinite linear;
    }

    @keyframes prixClipFix {
      0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
      }
      25% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
      }
      50% {
        clip-path: polygon(
          50% 50%,
          0 0,
          100% 0,
          100% 100%,
          100% 100%,
          100% 100%
        );
      }
      75% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
      }
      100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
      }
    }
  `}
`;
