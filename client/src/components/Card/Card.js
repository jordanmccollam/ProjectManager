import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';

import './_card.scss';

const logger = "Card:: ";

const Card = (props) => {
  let input = null;

  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState({
    content: props.content
  })
  const [storedValues, setStoredValues] = useState({
    content: props.content
  })

  let classes = {
		[`card`]: true
	};

  useEffect(()=>{
    input?.focus();
  })

  const onDoubleClick = () => {    
    onToggleEdit();
  }

  const onToggleEdit = () => {
    if (isEditing) { // Done editing / already editing
      // update saved data with new (currently temporary) changes 
      // props.onUpdate(storedValues, values);
    }

    setStoredValues({
      content: props.content
    })

    setIsEditing(!isEditing);
  }

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      onToggleEdit();
    }
  }

  const onBlur = () => {
    onToggleEdit();
  }

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      {isEditing ? (
        <textarea
          rows={1}
          ref={(this_input) => { input = this_input; }} 
          onDoubleClick={onDoubleClick}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          value={values.content} 
          name="content"
          onChange={onChange}
        />
      ) : (
        <div className="content" onDoubleClick={onDoubleClick}>
          {values.content}
        </div>
      )} 
      {props.children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  content: PropTypes.string
}

Card.defaultProps = {
  className: "",
  content: ""
}

export default Card;


