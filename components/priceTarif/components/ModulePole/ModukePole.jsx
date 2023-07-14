import React from 'react';
import icon from '../../../img/icons/12.png';

const ModukePole = ({
  arrayDataPuncts,
  numberModule,
  namedModule,
  height,
  topM,
  borderColor,
  width,
  colorText,
  iconsPng,
  marginR
}) => {
  return (
    <div>
      <fieldset className='borderRam' style={{height: height, marginTop: topM, marginLeft: marginR, borderColor: borderColor, width: '90%', color: colorText}}>
        <legend>
          <p className='textModuleUnevirsal' style={{color: colorText}}>МОДУЛЬ {numberModule}</p>
        </legend>
        <p className='introductionText' style={{color: colorText, width: width,}}>{namedModule}</p>
        {arrayDataPuncts.map(k =>
          <div className='punctItem'>
            <img style={{backgroundColor: 'red'}}
              src={iconsPng}
              className='imgIcon'
            />
            <p className='textPunct' style={{color: colorText}}>
              {k.punct}
            </p>
          </div>
        )}
      </fieldset>
    </div>
  )
}

export default ModukePole;