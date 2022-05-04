import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import classnames from "classnames"
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Card, Section } from '../../components';
import bg from '../../assets/quarkBoardBG.png';

import './_main.scss';

const logger = "Main:: ";

const testSections = [
  {
    title: "To do",
    notes: [{content: "Do dishes"}, {content: "Do more dishes"}, {content: "Do so many dishes it's unbelievable. The world has never seen so many dishes done!"}],
    id: "asdhjajsd"
  },
  {
    title: "In progress",
    notes: [{content: "Not doing dishes"}],
    id: "jiusad8asdu"
  },
  {
    title: "Done",
    notes: [{content: "Nothing"}],
    id: "k1243j2rf9"
  }
]

const defaultNewSection = {
  title: "",
  notes: [],
  id: "o148972343u"
}

const Main = (props) => {
  const [sections, setSections] = useState(testSections);
  const [editing, setEditing] = useState(null);

  let classes = {
		[`main`]: true
	};

  useEffect(() => {

  }, [])

  const onAddSection = () => {
    // Add new section
    var newSectionsArray = [...sections];
    newSectionsArray.push({...defaultNewSection, id: (sections.length + 1).toString()});
    setSections(newSectionsArray);

    // TODO: By default, select/edit the section title
  }

  const onUpdateSection = (oldSection, newSection) => {
    let _sections = [...sections];
    let index = _sections.findIndex(s => s.id == oldSection.id);
    _sections[index] = newSection;
    setSections(_sections);
  }

  return (
    <div className={`${props.className} ${classnames(classes)}`}>
      <div className="main-content">
        {sections.map((section, s) => (
          <Section key={`section-${s}`} {...section} onUpdate={onUpdateSection} >
            {/* {section.notes.map((note, n) => (
              <div key={`note-${n}`} >{note.content}</div>
            ))} */}
          </Section>
        ))}
        <div>

          {/* This is more of a button then a section */}
          {/* When the user clicks it, create a new section and by default: select/edit title of new section */}
          <div className="add-section-btn py-3 px-4" onClick={onAddSection}>
            <h4>Add Section</h4> 
            <h4>+</h4>
          </div>
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


