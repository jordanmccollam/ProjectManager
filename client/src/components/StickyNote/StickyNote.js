import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Row, Col } from 'react-bootstrap';

// Yellow note | red pin
import yellowStickyNote from '../../assets/yellow_stickyNote.png';
import redPin from '../../assets/red_pin.png';

import './_sticky-note.scss';

const logger = "StickyNote:: ";

const StickyNote = (props) => {
  let classes = {
		[`sticky-note`]: true
	};

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="sticky-note-images">
        <img alt="sticky note" src={yellowStickyNote} />
        <img alt="pin" src={redPin} className="pin" />

        <div className={`sticky-note-content sticky-note-content-${props.textType}`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

StickyNote.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  textType: PropTypes.oneOf([
    'marker',
    'text',
    'pencil'
  ])
}

StickyNote.defaultProps = {
  className: "",
  textType: "text",
  children: "_____"
}

export default StickyNote;


