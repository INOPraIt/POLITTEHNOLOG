import React from 'react';
import './Style.scss';

const CreditBtn = ({
  func
}) => {
  return (
    <div>
      <button
        className='creditTarif'
        onClick={func}
        >
        <p className='textCreditBtn'>
          в рассрочку
          от 1.666₽ в месяц
        </p>
      </button>
    </div>
  )
}

export default CreditBtn;