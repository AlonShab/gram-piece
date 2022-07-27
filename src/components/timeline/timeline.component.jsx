import React from "react";
import styled from 'styled-components';
import classNames from "classnames";

import * as styles from './timeline.styles';

export const Timeline = styled(({className}) => {
  return (<div className={classNames(className)}>This is a landing page</div>);
})`${styles.timeline}`;
