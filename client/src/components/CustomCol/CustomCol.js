import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col, Button } from 'react-bootstrap';

import './_custom-col.scss';

const logger = "CustomCol:: ";

const CustomCol = (props) => {
  let classes = {
		[`custom-col`]: true,
		[`custom-col-${props.type}`]: true,
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="py-3 px-4 custom-col-header">
        <h4>{props.title}</h4>
        <div className="header-btn" onClick={() => {
          props.event();
        }} >+</div>
      </div>
      <div className="custom-col-content">
        {props.children}
      </div>
    </div>
  )
}

CustomCol.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf([
    "default",
    "utility"
  ]),
  event: PropTypes.func
}

CustomCol.defaultProps = {
  className: "",
  title: "To do",
  type: "default",
  event: () => {
    console.log("CustomCol: No event assigned");
  }
}

export default CustomCol;


