import React from 'react';
import './Style.scss';

const SaleTarifBtn = ({
  func,
  link
}) => {
  return (
    <div>
      <button className='saleTarif' onClick={func}>
        <p className='textSaleBtn'>
          <a href={link} style={{textDecoration: 'none', color: 'black'}}>
            приобрести тариф
          </a>
        </p>
      </button>
    </div>
  )
}

export default SaleTarifBtn;