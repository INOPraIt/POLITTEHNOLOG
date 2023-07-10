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
            приобрести тариф
        </p>
      </button>
    </div>
  )
}

export default SaleTarifBtn;