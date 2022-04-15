import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from '../../components';
import bg from '../../assets/quarkBoardBG.png';

import './_main.scss';

const logger = "Main:: ";

const Main = (props) => {
  let classes = {
		[`main`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <img alt="bg" src={bg} className="main-bg" />
    </div>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

Main.defaultProps = {
  className: ""
}

export default Main;


