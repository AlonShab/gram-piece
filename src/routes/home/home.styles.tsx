import { css } from "styled-components";

export const home = css(({ theme }) => {
  return css`
    width: 100%;
    height: 70rem;
    margin: 0 auto;
    padding-top: 4rem;

    @media only screen and (min-width: 600px) {
      width: 80%;
      border-left: .1rem solid rgba(30,30,30,.1);
      border-right: .1rem solid rgba(30,30,30,.1);
      box-shadow: 0px 1px 9px 3px rgba(0,0,0,0.3);
    }

    @media only screen and (min-width: 850px) {
      width: 70%;
    }

    @media only screen and (min-width: 1100px) {
      width: 60%;
    }

    @media only screen and (min-width: 1350px) {
      width: 50%;
      max-width: 40rem;
    }
  `;
});
