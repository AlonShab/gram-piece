import React from "react";
import { Outlet, Link } from "react-router-dom";
import classNames from "classnames";
import styled from "styled-components";

import * as styles from "./navigation.styles";
import { ReactComponent as StrawHatLogo } from '../../assets/straw-hat-svgrepo-com.svg';


export const Navigation = styled(({className}) => {
  return (
    <>
      <div className={classNames(className)}>
        <Link className="LogoContainer" to="/">
          <StrawHatLogo className="logo"/>
        </Link>
      </div>
      <Outlet />
    </>
  );
})`
  ${styles.navigation}
`;

export default Navigation;
