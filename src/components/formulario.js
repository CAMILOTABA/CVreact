import React from 'react';

const formulario= (props) => {
    const myExperience = (
      <div>
        {props.formulario.map((exp) =>
          <div className='item' key={exp.jobTitle}>
            <h3>{exp.jobTitle} @ {exp.company} <span>{exp.startDate} - {exp.endDate}</span></h3>
            <p>{exp.jobDescription}</p>
          </div>
        )}
      </div>
    );
    return (
        <textarea>
        Hello there, this is some text in a text area
      </textarea>
    )
  };


export default formulario;