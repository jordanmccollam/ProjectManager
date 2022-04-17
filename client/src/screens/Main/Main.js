import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col } from 'react-bootstrap'
import { Card, StickyNote, CustomCol } from '../../components';
import bg from '../../assets/quarkBoardBG.png';

import './_main.scss';

const logger = "Main:: ";

const testSections = [
  {
    title: "To do",
    notes: [{content: "Do dishes"}, {content: "Do more dishes"}, {content: "Do so many dishes it's unbelievable. The world has never seen so many dishes done!"}]
  },
  {
    title: "In progress",
    notes: [{content: "Not doing dishes"}]
  },
  {
    title: "Done",
    notes: [{content: "Nothing"}]
  }
]

const Main = (props) => {
  const [sections, setSections] = useState(testSections);
  let classes = {
		[`main`]: true
	};

  useEffect(() => {

  }, [])

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="main-content">
        {sections.map((section, s) => (
          <CustomCol key={`section-${s}`} title={section.title} >
            {section.notes.map((note, n) => (
              <StickyNote key={`note-${n}`} >{note.content}</StickyNote>
            ))}
          </CustomCol>
        ))}
        <CustomCol title="Add Section" type="utility" >
          
        </CustomCol>
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


