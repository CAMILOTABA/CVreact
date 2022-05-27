import React from 'react';

const Habilidades = (props) => {
  const mySkills = (
    <div>
      {props.Habilidades.map((skll) =>
        <div className='item w33' key={skll.name}>
          <h3>{skll.name}</h3>
          <div className='Habilidades'>
            <span style={{width: skll.percentage}}></span>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-code'></i>
      <h2>Habilidades</h2>
      {mySkills}
    </div>
  )
};

export default Habilidades;



