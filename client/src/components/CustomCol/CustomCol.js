import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';

import './_custom-col.scss';

const logger = "CustomCol:: ";

const CustomCol = (props) => {
  const [isEmpty, setIsEmpty] = useState(true);
  let classes = {
		[`custom-col`]: true,
		[`custom-col-empty`]: isEmpty,
	};

  const RenderContent = () => {
    if (props.children == null && !isEmpty) {
      setIsEmpty(true);
    } 
    else if (props.children != null && isEmpty) {
      setIsEmpty(false);
    }

    return (props.children);
  }

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <h4 className="py-3 pl-4">{props.title}</h4>
      <div className="custom-col-content">
        {RenderContent()}
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


