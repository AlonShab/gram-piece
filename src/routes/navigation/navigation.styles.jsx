import { css } from "styled-components";

export const navigation = css(({ theme }) => {
  return css`
    position: fixed;
    top: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f49f1c;

    & .LogoContainer {
      padding: 0 1rem;
      text-decoration: none;
      font-size: 2rem;
      color: #f49f1c;
    }
  `;
});
