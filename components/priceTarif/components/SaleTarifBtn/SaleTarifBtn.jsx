import React from 'react';
import './Style.scss';

const SaleTarifBtn = ({
  func
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