import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Card, CustomCol } from '../../components';
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
  const [isAddingSection, setIsAddingSection] = useState(false);
  let classes = {
		[`main`]: true
	};

  useEffect(() => {

  }, [])

  const onAddSection = () => {
    console.log(isAddingSection ? "Done with section!" : "Add section!"); // for testing
    setIsAddingSection(!isAddingSection);
  }

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="main-content">
        {sections.map((section, s) => (
          <CustomCol key={`section-${s}`} title={section.title} >
            {/* {section.notes.map((note, n) => (
              <div key={`note-${n}`} >{note.content}</div>
            ))} */}
          </CustomCol>
        ))}
        <div>
          {isAddingSection ? (
            <CustomCol title={"___"} type="utility" event={onAddSection} >

            </CustomCol>
          ) : (
            <div className="add-section-btn py-3 px-4" onClick={onAddSection}>
              <h4>Add Section</h4> 
              <h4>+</h4>
            </div>
          )}
        </div>
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


