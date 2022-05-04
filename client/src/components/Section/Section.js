import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col, Button, Form } from 'react-bootstrap';

import './_section.scss';

const logger = "Section:: ";

const Section = (props) => {
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
		[`section`]: true,
		[`section-${props.type}`]: true,
	};

  useEffect(()=>{
    titleInput?.focus();
  })

  useEffect(() => {
    if (props.title.trim() == "") {
      console.log("Confirmed");
      onToggleEdit();
    }
  }, [])

  const onDoubleClick = () => {    
    onToggleEdit();
  }

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onBlur = () => {
    onToggleEdit();
  }

  const onToggleEdit = () => {
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

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      onToggleEdit();
    }
  }

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="py-3 px-4 section-header">
        {isEditing ? (
          <input 
            ref={(this_input) => { titleInput = this_input; }} 
            onDoubleClick={onDoubleClick} 
            type="text" 
            value={values.title} 
            name="title"
            onChange={onChange}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
          />
        ) : (
          <h4 onDoubleClick={onDoubleClick}>{props.title.trim() == "" ? "Unnamed" : props.title}</h4>
        )}
        <div className="header-btn" onClick={() => {
          props.event();
        }} >+</div>
      </div>
      <div className="section-content">
        {props.children}
      </div>
    </div>
  )
}

Section.propTypes = {
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

Section.defaultProps = {
  className: "",
  title: "To do",
  type: "default",
  event: () => {
    console.log("Section: No event func assigned");
  },
  onUpdate: () => {
    console.log("Section: No onUpdate func assigned")
  }
}

export default Section;


