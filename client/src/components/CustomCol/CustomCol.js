import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col, Button, Form } from 'react-bootstrap';

import './_custom-col.scss';

const logger = "CustomCol:: ";

const CustomCol = (props) => {
  let titleInput = null;

  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState({
    title: props.title,
    notes: props.notes,
    id: props.id
  })
  const [storedValues, setStoredValues] = useState({
    title: props.title,
    notes: props.notes,
    id: props.id
  })

  let classes = {
		[`custom-col`]: true,
		[`custom-col-${props.type}`]: true,
	};

  useEffect(()=>{
    titleInput?.focus();
  })

  const onDoubleClick = (e) => {    
    if (isEditing) { // Done editing / already editing
      // update saved data with new (currently temporary) changes 
      props.onUpdate(storedValues, values);
    }

    setStoredValues({
      title: props.title,
      notes: props.notes,
      id: props.id
    })

    setIsEditing(!isEditing);
  }

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="py-3 px-4 custom-col-header">
        {isEditing ? (
          <input 
            ref={(this_input) => { titleInput = this_input; }} 
            onDoubleClick={onDoubleClick} 
            type="text" 
            value={values.title} 
            name="title"
            onChange={onChange}
          />
        ) : (
          <h4 onDoubleClick={onDoubleClick}>{props.title}</h4>
        )}
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
  event: PropTypes.func,
  onUpdate: PropTypes.func
}

CustomCol.defaultProps = {
  className: "",
  title: "To do",
  type: "default",
  event: () => {
    console.log("CustomCol: No event func assigned");
  },
  onUpdate: () => {
    console.log("CustomCol: No onUpdate func assigned")
  }
}

export default CustomCol;


