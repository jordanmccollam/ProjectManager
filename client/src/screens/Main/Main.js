import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap'
import { Card, StickyNote, CustomCol } from '../../components';
import bg from '../../assets/quarkBoardBG.png';

import './_main.scss';

const logger = "Main:: ";

const Main = (props) => {
  let classes = {
		[`main`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="main-content">
        <CustomCol title="To do" >
          <StickyNote>Do Dishes</StickyNote>
          <StickyNote>Do Dishes</StickyNote>
          <StickyNote>Do Dishes</StickyNote>
          <StickyNote>Do Dishes</StickyNote>
        </CustomCol>
        <CustomCol title="In progress" ></CustomCol>
        <CustomCol title="Done" ></CustomCol>
        <CustomCol title="Ideas" ></CustomCol>
        <CustomCol title="Other" ></CustomCol>
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


