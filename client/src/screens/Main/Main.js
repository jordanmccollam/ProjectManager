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
    <Container fluid className={`${props.className} ${classnames(classes)}`}>
      <img alt="bg" src={bg} className="main-bg" />

      <Row className="full">
        <Col className="custom-col">
          <StickyNote textType="text">jaskdjkasd</StickyNote>
          <StickyNote textType="text">sdaklskd</StickyNote>
          <StickyNote textType="text">asdklaskd</StickyNote>
        </Col>
        <Col className="custom-col">
          <StickyNote textType="marker">laskda</StickyNote>
        </Col>
        <Col className="custom-col">
          <StickyNote textType="pencil">as,dalskdlaskdlkasldklaskdlaksdlkalsdklaskdlakdlaksd</StickyNote>
          <StickyNote textType="pencil">aksdjaksjdkajd</StickyNote>
        </Col>
      </Row>
    </Container>
  )
}

Main.propTypes = {
  className: PropTypes.string
}

Main.defaultProps = {
  className: ""
}

export default Main;


