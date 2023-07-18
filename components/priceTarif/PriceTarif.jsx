import React from 'react';
import './Style.scss';
import one from '../img/cours/1.png';
import two from '../img/cours/2.png';
import three from '../img/cours/3.png';
import childrenIcons from '../img/icons/11.png';
import iconOne from '../img/icons/12.png';
import ModukePole from './components/ModulePole/ModukePole';
import SaleTarifBtn from './components/SaleTarifBtn/SaleTarifBtn';
import CreditBtn from './components/CreditBtn/CreditBtn';
import PromoInput from './components/PromoInput/PromoInput';
import PremiumModule from './components/PremiumModule/PremiumModule';
import 'react-toastify/dist/ReactToastify.css';
import btnCross from '../img/icons/icons8-cross-60.png';
import { ToastContainer, toast } from 'react-toastify';
import iconTwo from '../img/icons/13.png';
import axios from 'axios';
import { Navigate } from "react-router-dom";

const idThree = Date.now();

const PriceTarif = () => {
  const [linkVip, setLinkVip] = React.useState('');

  const goToPayFunc = () => {
    return <Navigate to="/about" replace={true}/>
  }

  const arrayModuleFive = [
    {
      id: 1,
      punct: 'Дополнительная технология как решить проблемы ЖКХ и избраться депутатом за 70 тысяч рубелей.'
    },
    {
      id: 2,
      punct: '5 ЧАСОВ персональной консультации Марселя Хазиева'
    },
  ];

  const arrayDop = [
    {
      id: 1,
      punct: 'Урок голоса. Делаем голос низким на широкую аудиторию за 15 минут в день'
    }
  ];

  const [linkOne, setLinkOne] = React.useState('');

  

  const [modal, setModal] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [mobilePhone, setMobilePhone] = React.useState('');

  console.log(email);
  console.log(mobilePhone);
  console.log(email);

  const notify = () => toast('Заполните все данные!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  function saleLink(e) {
    e.preventDefault();
  };

  function saleTarifChezar(event) {
    setModal(prev => !prev);
    event.preventDefault();

    axios.post("https://securepay.tinkoff.ru/v2/Init", {
      "TerminalKey": "TinkoffBankTest",
      "Amount": 2000000,
      "OrderId": `${idThree}`,
      "Description": "Тариф Цезарь",
      "DATA": {
        "Phone": mobilePhone,
        "Email": email
      },
      "Receipt": {
        "Email": "ryzevdmitrij@gmail.com",
        "Phone": mobilePhone,
        "EmailCompany": email,
        "Taxation": "osn",
        "Items": [
          {
            "Name": "Тариф Цезарь",
            "Price": 2000000,
            "Quantity": 1.00,
            "Amount": 2000000,
            "PaymentMethod": "full_prepayment",
            "PaymentObject": "commodity",
            "Tax": "vat10",
            "Ean13": "0123456789"
          }
        ]
      }
    })
      .then((response) => {
        setLinkOne(`${response.data.PaymentURL}`);
        console.log('ref');
      });

    notify();
  };

  console.log(linkOne);

  function saleTarifSharlDeGol(event) {
    setModal(prev => !prev);
    event.preventDefault();

    axios.post("https://securepay.tinkoff.ru/v2/Init", {
      "TerminalKey": "TinkoffBankTest",
      "Amount": 5000000,
      "OrderId": `${idThree}`,
      "Description": "Тариф Шарль Де Голь",
      "DATA": {
        "Phone": mobilePhone,
        "Email": email
      },
      "Receipt": {
        "Email": "ryzevdmitrij@gmail.com",
        "Phone": mobilePhone,
        "EmailCompany": email,
        "Taxation": "osn",
        "Items": [
          {
            "Name": "Тариф Цезарь",
            "Price": 5000000,
            "Quantity": 1.00,
            "Amount": 5000000,
            "PaymentMethod": "full_prepayment",
            "PaymentObject": "commodity",
            "Tax": "vat10",
            "Ean13": "0123456789"
          }
        ]
      }
    })
      .then((response) => {
        setLinkOne(`${response.data.PaymentURL}`);
        console.log('ref');
      });

    notify();
  };

  function saleTarifCherchil() {
    setModal(prev => !prev);

    axios.post("https://securepay.tinkoff.ru/v2/Init", {
      "TerminalKey": "TinkoffBankTest",
      "Amount": 7000000,
      "OrderId": `${idThree}`,
      "Description": "Тариф Черчиль",
      "DATA": {
        "Phone": mobilePhone,
        "Email": email
      },
      "Receipt": {
        "Email": "ryzevdmitrij@gmail.com",
        "Phone": mobilePhone,
        "EmailCompany": email,
        "Taxation": "osn",
        "Items": [
          {
            "Name": "Тариф Цезарь",
            "Price": 7000000,
            "Quantity": 1.00,
            "Amount": 7000000,
            "PaymentMethod": "full_prepayment",
            "PaymentObject": "commodity",
            "Tax": "vat10",
            "Ean13": "0123456789"
          }
        ]
      }
    })
      .then((response) => {
        setLinkOne(`${response.data.PaymentURL}`);
        console.log('ref');
      });

    notify();
  };

  function saleTarifVip() {
    setModal(prev => !prev);

    axios.post("https://securepay.tinkoff.ru/v2/Init", {
      "TerminalKey": "TinkoffBankTest",
      "Amount": 12000000,
      "OrderId": `${idThree}`,
      "Description": "Тариф Vip",
      "DATA": {
        "Phone": mobilePhone,
        "Email": email
      },
      "Receipt": {
        "Email": "ryzevdmitrij@gmail.com",
        "Phone": mobilePhone,
        "EmailCompany": email,
        "Taxation": "osn",
        "Items": [
          {
            "Name": "Тариф Цезарь",
            "Price": 12000000,
            "Quantity": 1.00,
            "Amount": 12000000,
            "PaymentMethod": "full_prepayment",
            "PaymentObject": "commodity",
            "Tax": "vat10",
            "Ean13": "0123456789"
          }
        ]
      }
    })
      .then((response) => {
        setLinkOne(`${response.data.PaymentURL}`);
        console.log('ref');
      });

    notify();
  };

  function saleForCreditOne() {
    setModal(prev => !prev);

    axios.post("https://forma.tinkoff.ru/api/partners/v2/orders/create", {
      "shopId": "9876345",
      "sum": "2000000",
      "items": [
        {
          "name": "chezar",
          "quantity": "12",
          "price": "1666"
        }
      ]
    })
      .then((response) => {
        setLinkOne(`${response.data.PaymentURL}`);
        console.log('ref');
      });

    notify();
  }

  function saleForCreditTwo() {
    setModal(prev => !prev);

    axios.post("https://forma.tinkoff.ru/api/partners/v2/orders/create", {
      "shopId": "9876345",
      "sum": "1000000",
      "items": [
        {
          "name": "chezar",
          "quantity": "10",
          "price": "100000"
        }
      ]
    })
      .then((response) => {
        setLinkOne(`${response.data.PaymentURL}`);
        console.log('ref');
      });

    notify();
  }

  function saleForCreditThree() {
    setModal(prev => !prev);

    axios.post("https://forma.tinkoff.ru/api/partners/v2/orders/create", {
      "shopId": "9876345",
      "sum": "1000000",
      "items": [
        {
          "name": "chezar",
          "quantity": "10",
          "price": "100000"
        }
      ]
    })
      .then((response) => {
        setLinkOne(`${response.data.PaymentURL}`);
        console.log('ref');
      });

    notify();
  }

  function saleForCreditFour() {
    setModal(prev => !prev);

    axios.post("https://forma.tinkoff.ru/api/partners/v2/orders/create", {
      "shopId": "9876345",
      "sum": "1000000",
      "items": [
        {
          "name": "chezar",
          "quantity": "10",
          "price": "100000"
        }
      ]
    })
      .then((response) => {
        setLinkOne(`${response.data.PaymentURL}`);
        console.log('ref');
      });

    notify();
  }

  const arrayIntroduction = [
    {
      id: 1,
      punct: 'Политические команды',
    },
    {
      id: 2,
      punct: 'Избирательные округа',
    },
    {
      id: 3,
      punct: 'Структура штаба',
    },
    {
      id: 4,
      punct: 'Планирование избирательной кампании',
    },

    {
      id: 5,
      punct: 'План-график'
    },
  ];

  const arrayModuleTwo = [
    {
      id: 1,
      punct: 'Узнаваемость'
    },
    {
      id: 2,
      punct: 'Ваш первый агитматериал'
    },
    {
      id: 3,
      punct: 'Главный вопрос целевой аудитории'
    },
  ];

  const arrayModuleThree = [
    {
      id: 1,
      punct: 'Весь агитматериал по план-графику в течение календарного года'
    },
  ];

  const arrayModuleFour = [
    {
      id: 1,
      punct: 'Виды СМИ, работа с ними'
    },
    {
      id: 2,
      punct: 'Спонсоры на выборы'
    },
    {
      id: 3,
      punct: 'День выборов. Технология наблюдения на выборах'
    },
    {
      id: 4,
      punct: 'Уязвимые места на избирательном участке'
    },
    {
      id: 5,
      punct: 'Защита результата'
    },
    {
      id: 6,
      punct: 'Информационное сопровождение'
    },
  ];

  const black = 'black'

  return (
    <div className='containerPriceTarif'>
      <div className='itemCezar'>
        <img 
          src={one}
          className='imgCezar'
        />
        <div className='tarifCezar'>
          <div className='blockTarifCezar'>
            <div className='quantityBlock'>
              <img 
                src={childrenIcons}
                className='imgChildren'
              />
              <p className='twentyTextLid'>20 мест</p>
            </div>
            <p className='tarifText'>тариф</p>
            <p className='nameTarifCezar'>цезарь</p>
          </div>
          <ModukePole
            arrayDataPuncts={arrayIntroduction}
            namedModule={'ВВЕДЕНИЕ'}
            numberModule={'1'}
            height={252}
            topM={54}
            iconsPng={iconOne}
          />
          <p className='oldPrice'>24.900р</p>
          <p className='newPrice'>20.000р</p>
          <SaleTarifBtn
            func={saleTarifChezar}
          />
          <CreditBtn 
            func={saleForCreditOne}
          />
          <PromoInput />
        </div>
      </div>
      <div className='itemCharlDeGol'>
        <img 
          src={two}
          className='imgCharlDeGol'
        />
        <div className='tarifCharlDeGol'>
          <div className='blockTarifCezar'>
            <div className='quantityBlock'>
              <img 
                src={childrenIcons}
                className='imgChildren'
              />
              <p className='twentyTextLid'>15 мест</p>
            </div>
            <p className='tarifText'>тариф</p>
            <p className='nameTarifCezar' style={{ width: 142 }}>Шарль де голь</p>
          </div>
          <ModukePole
            arrayDataPuncts={[]}
            namedModule={'ВВЕДЕНИЕ'}
            numberModule={'1'}
            height={62}
            topM={20}
          />
          <ModukePole
            arrayDataPuncts={arrayModuleTwo}
            namedModule={'КАК ПРОКАЧАТЬ УЗНАВАЕМОСТЬ БЕЗ ЛИШНИХ ЗАТРАТ'}
            numberModule={'2'}
            height={185}
            topM={32}
            iconsPng={iconOne}
          />
          <ModukePole
            arrayDataPuncts={arrayModuleThree}
            namedModule={'Агитация, средства массовой информации, спонсоры'}
            numberModule={'3'}
            height={165}
            topM={32}
            iconsPng={iconOne}
          />
          <p className='oldPrice'>58.900р</p>
          <p className='newPrice'>50.000р</p>
          <SaleTarifBtn
            func={saleTarifSharlDeGol}
          />
          <CreditBtn 
            func={saleForCreditTwo}
          />
          <PromoInput />
        </div>
      </div>
      <div className='itemCherchil'>
        <img 
          src={three}
          className='imgCherchil'
        />
        <div className='tarifCherchil'>
          <div className='blockTarifCezar'>
            <div className='quantityBlock'>
              <img 
                src={childrenIcons}
                className='imgChildren'
              />
              <p className='twentyTextLid'>15 мест</p>
            </div>
            <p className='tarifText'>тариф</p>
            <p className='nameTarifCezar' style={{ width: 142 }}>Черчиль</p>
          </div>
          <ModukePole
            arrayDataPuncts={[]}
            namedModule={'ВВЕДЕНИЕ'}
            numberModule={'1'}
            height={62}
            topM={54}
          />
          <ModukePole
            arrayDataPuncts={[]}
            namedModule={'КАК ПРОКАЧАТЬ УЗНАВАЕМОСТЬ БЕЗ ЛИШНИХ ЗАТРАТ'}
            numberModule={'2'}
            height={81}
            topM={32}
          />
          <ModukePole
            arrayDataPuncts={[]}
            namedModule={'Агитация, средства массовой информации, спонсоры'}
            numberModule={'3'}
            height={98}
            topM={32}
          />
          <ModukePole
            arrayDataPuncts={arrayModuleFour}
            namedModule={'ДЕНЬ ВЫБОРОВ С ЮРИСТОМ, РАБОТАЮЩИМ В ЦЕНТРАЛЬНОЙ ИЗБИРАТЕЛЬНОЙ КОМИССИИ (ЦИК) РОССИИ'}
            numberModule={'4'}
            height={370}
            topM={32}
            iconsPng={iconOne}
          />
          <p className='oldPrice'>80.000р</p>
          <p className='newPrice'>70.000р</p>
          <SaleTarifBtn
            func={saleTarifCherchil}
          />
          <CreditBtn 
            func={saleForCreditThree}
          />
          <PromoInput />
        </div>
      </div>
      <div className='itemPrem'>
        <div className='tarifPrem'>
          <div className='containerModulePremium'>
            <div className='blockTarifCezar'>
              <div className='quantityBlock'>
                <p className='twentyTextLid' style={{ color: 'black' }}>15 мест</p>
              </div>
              <p className='tarifText' style={{ color: 'black' }}>тариф</p>
              <p className='nameTarifCezar' style={{ width: 142, color: 'black' }}> - VIP -</p>
              <ModukePole
                arrayDataPuncts={[]}
                namedModule={'ВВЕДЕНИЕ'}
                numberModule={'1'}
                height={62}
                topM={54}
                borderColor={'#181818'}
                width={250}
                marginR={0}
                colorText={black}
                iconsPng={iconTwo}
              />
              <ModukePole
                arrayDataPuncts={[]}
                namedModule={'КАК ПРОКАЧАТЬ УЗНАВАЕМОСТЬ БЕЗ ЛИШНИХ ЗАТРАТ'}
                numberModule={'2'}
                height={81}
                borderColor={'#181818'}
                topM={32}
                colorText={'black'}
                iconsPng={iconTwo}
              />
              <ModukePole
                arrayDataPuncts={[]}
                namedModule={'Агитация, средства массовой информации, спонсоры'}
                numberModule={'3'}
                borderColor={'#181818'}
                height={98}
                topM={32}
                colorText={'black'}
                iconsPng={iconTwo}
              />
              <ModukePole
                arrayDataPuncts={[]}
                namedModule={'ДЕНЬ ВЫБОРОВ С ЮРИСТОМ, РАБОТАЮЩИМ В ЦЕНТРАЛЬНОЙ ИЗБИРАТЕЛЬНОЙ КОМИССИИ (ЦИК) РОССИИ'}
                numberModule={'4'}
                borderColor={'#181818'}
                height={136}
                topM={32}
                colorText={'black'}
                iconsPng={iconTwo}
              />
              <ModukePole
                arrayDataPuncts={arrayModuleFive}
                namedModule={'ЗОЛОТОЙ МОДУЛЬ “От правозащитника ЖКХ - в депутаты” или выигрышная избирательная кампания за 70 тысяч рублей.'}
                numberModule={'4'}
                borderColor={'#181818'}
                height={270}
                topM={32}
                colorText={'black'}
                iconsPng={iconTwo}
              />

              <ModukePole
                arrayDataPuncts={arrayDop}
                namedModule={'дополнительный'}
                numberModule={'4'}
                borderColor={'#181818'}
                height={129}
                topM={32}
                colorText={'black'}
                iconsPng={iconTwo}
              />
              <div className='blockDivOnePremium'>
                <p className='oldPrice'>134.900р</p>
                <p className='newPrice'>120.000р</p>
                <SaleTarifBtn
                  func={saleTarifVip}
                      />
                <CreditBtn 
                  func={saleForCreditFour}
                      />
                <PromoInput />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={modal ? 'modalCont active' : 'modalCont'}>
        <div className={modal ? 'module active' : 'module'}>
          <div className='blockDetalis'>
            <div>
              <h1 className='detalisText'>Осталось уточнить детали.</h1>
              <p className='textThisIsDetalis'>
                С помощью этих данных мы сможем с вами связаться.
              </p>
            </div>
            <button
              onClick={() => setModal(prev => !prev)}
              className='btnCross'
            >
              <img 
                src={btnCross}
                className='imgBtnCross'
              />
            </button>
          </div>
          <input
            className='impEmailOne'
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            className='impEmailOne'
            placeholder='Ваш телефон'
            value={mobilePhone}
            onChange={(event) => setMobilePhone(event.target.value)}
            required
          />
          <p className='textPayLink'>
            Нажимая кнопку оплатить вы соглашаетесь
            с договором публичной оферты
          </p>
          <button 
            className='goToPayBtn'
            onClick={() => goToPayFunc()}
            >
            {/* <a
              href={linkOne}
              className='goToPayLink'
              onclick={() => saleLink()}
            > */}
              Перейти к оплате
            {/* </a> */}
          </button>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  )
}

export default PriceTarif;
