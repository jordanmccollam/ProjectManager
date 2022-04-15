import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap'
import { Card, StickyNote } from '../../components';
import bg from '../../assets/quarkBoardBG.png';

import './_main.scss';

const logger = "Main:: ";

const Main = (props) => {
  let classes = {
		[`main`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      {/* BG */}
      <img alt="bg" src={bg} className="main-bg" />

      {/* CONTENT */}
      <div className="main-content">
        <StickyNote textType="text" content="" >My First Sticky Note</StickyNote>
      </div>
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


