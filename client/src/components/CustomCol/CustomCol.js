import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';

import './_custom-col.scss';

const logger = "CustomCol:: ";

const CustomCol = (props) => {
  let classes = {
		[`custom-col`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <h4 className="py-3">{props.title}</h4>
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
  title: PropTypes.string
}

CustomCol.defaultProps = {
  className: "",
  title: "To do"
}

export default CustomCol;


