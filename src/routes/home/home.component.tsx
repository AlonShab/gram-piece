import React from "react";
import styled from "styled-components";
import classNames from "classnames";

import { Timeline } from "../../components/timeline/timeline.component";

import * as styles from "./home.styles";

export const Home = styled(({ className }) => {
  return <div className={classNames(className)}><Timeline /></div>;
})`
  ${styles.home}
`;
