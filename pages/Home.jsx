import React from 'react'
import RormatOneeact from 'react';
import './Style.scss';
import oneFoto from '../components/img/2.png';
import twoFoto from '../components/img/3.png';
import threeFoto from '../components/img/4.png';
import fourFoto from '../components/img/5.png';
import fiveFoto from '../components/img/7.png';
import sixFoto from '../components/img/9.png';
import sevenFoto from '../components/img/11.png';
import iconOne from '../components/img/icons/1.png';
import iconTwo from '../components/img/icons/2.png';
import iconThree from '../components/img/icons/4.png';
import iconFour from '../components/img/icons/5.png';
import iconFive from '../components/img/icons/6.png';
import iconSix from '../components/img/icons/7.png';
import iconSeven from '../components/img/icons/3.png';
import iconEath from '../components/img/icons/8.png';
import Tabs from '../components/tabs/Tabs';
import SlideOne from '../components/slide/SlideOne';
import fotoSertificats from '../components/img/13.png';
import SlideTwo from '../components/slide/SlideTwo';
import formatOne from '../components/img/cours/1.png';
import formatTwo from '../components/img/cours/2.png';
import formatThree from '../components/img/cours/3.png';
import PriceTarif from '../components/priceTarif/PriceTarif';
import onyOne from '../components/img/14.png';
import QuestionsContainer from '../components/questions/QuestionsContainer';
import logoOne from '../components/img/logo/1.png';
import logoTwo from '../components/img/logo/2.png';
import fotoOne from '../components/img/fotoStudents/one.png';
import fotoTwo from '../components/img/fotoStudents/two.png';
import fotoThree from '../components/img/fotoStudents/three.png';
import fotoFour from '../components/img/fotoStudents/four.png';
import fotoFive from '../components/img/fotoStudents/five.png';
import fotoSix from '../components/img/fotoStudents/six.png';
import secretProgramm from '../components/img/secretProgramm.png';
import fotoOneS from '../components/img/fotoStudentsElips/1.png';
import fotoTwoS from '../components/img/fotoStudentsElips/2.png';
import fotoThreeS from '../components/img/fotoStudentsElips/3.png';
import fotoFourS from '../components/img/fotoStudentsElips/4.png';
import fotoFiveS from '../components/img/fotoStudentsElips/5.png';
import fotoSixS from '../components/img/fotoStudentsElips/6.png';
import secretFotoChes from '../components/img/17.png';
import imgProgrammFon from '../components/img/programmCours.png';
import imgRombsStudents from '../components/img/20.png';

import fotoSecret11 from '../components/img/11Secret.png';
// import linkThreeTochki from ''

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import ReactPlayer from 'react-player';

const Home = () => {

  React.useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = (event) => {
        setWidth(event.target.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    console.log(width);
  }

  const arrayProgOne = [
    {
      id: 1,
      title: 'Вы узнаете, как провести выборную кампанию по новым технологиям',
    },
    {
      id: 2,
      title: 'Вам будут даны живые кейсы,  совместно с ментором вы напишите своё первое планирование',
    },
    {
      id: 3,
      title: 'Вы поймёте, что такое поиттехнология не по учебнику, а почувствуете её фактуру',
    },
  ];

  const arrayProgTwo = [
    {
      id: 1,
      title: 'Самостоятельно собрать предвыборный штаб',
    },
    {
      id: 2,
      title: 'Ориентироваться в технологиях и работе своего штаба',
    },
    {
      id: 3,
      title: 'Объективно оценивать каждого члена команды, а также самостоятельно руководить штабом',
    },
    {
      id: 4,
      title: 'Избраться депутатом',
    },
    {
      id: 5,
      title: 'Сэкономить расходы вашей избирательной компании на 50-70%',
    },
    {
      id: 6,
      title: 'Устроиться в выборный штаб и зарабатывать от 80 тысяч рублей в месяц (в регионах) и от 200 тысяч рублей (в МСК и СПБ)',
    },
  ];

  const arrayThree = [
    {
      id: 1,
      title: "Марсель Хазиев",
      img: iconFive
    },
    {
      id: 2,
      title: "Marsel_khaziev",
      img: iconSix
    },
    {
      id: 3,
      title: "Канал в Telegram",
      img: iconSix
    },
  ];

  const arrayFour = [
    {
      id: 1,
      title: "Депутат Центрального района города Челябинска"
    },
    {
      id: 2,
      title: "Председатель Челябинской городской общественной инспекции"
    },
    {
      id: 3,
      title: "Большой опыт проведения избирательных кампаний муниципальных образований и регионов России"
    },
    {
      id: 4,
      title: "Автор методики “Победа на выборах без административного ресурса”"
    }
  ];

  const arrayCasesStudents = [
    {
      id: 1,
      title: 'ГЛАДЫШЕВА ИРИНА',
      imgLink: fotoOne,
      text: 'Избралась депутатом в Центральном районе Челябинска в 2021 году самовыдвиженцем. Второе место заняли представители СРов, третье - ЕР. Сейчас Гладышева Ирина  занимается правозащитой деятельностью в сфере ЖКХ и экологии.  А также Ирина Гладышева возглавила товарищество собственников недвижимости в своём доме.'
    },
    {
      id: 2,
      title: 'ИВАНОВ ДМИТРИЙ',
      imgLink: fotoTwo,
      text: 'Избрался депутатом в Калининском районе Челябинска в 2021 году от партии СР, обогнав  основного оппонента более, чем в два раза. Сейчас занимается научной деятельностью и работой депутата.'
    },
    {
      id: 3,
      title: 'ДАДАЕВ ВАДИМ',
      imgLink: fotoThree,
      text: 'В 2019 году избрался депутатом Центрального района города Челябинска от партии Единая Россия.'
    },
    {
      id: 4,
      title: 'РОМАНОВ ИГОРЬ',
      imgLink: fotoFour,
      text: 'В 2019 году избрался депутатом и провёл пул из трёх депутатов в поселке Красное Поле Сосновского района Челябинской области в качестве самовыдвиженцев. В настоящий момент работают депутатами и защищают права жителей в области ЖКХ.'
    },
    {
      id: 5,
      title: 'ПЕРЬМЯКОВ ИЛЬЯ',
      imgLink: fotoFive,
      text: 'В 2021 году избрался депутатом Калининского района города Челябинска от партии СР.'
    },
    {
      id: 6,
      title: 'БЕЛЬСКИЙ ДМИТРИЙ',
      imgLink: fotoSix,
      text: 'В 2021 году избран депутатом Калининского района Челябинска от СР.'
    },
  ]

  const arrayCasesStudentsSecret = [
    {
      id: 1,
      title: 'ГЛАДЫШЕВА ИРИНА',
      imgLink: fotoOneS,
      text: 'Избралась депутатом в Центральном районе Челябинска в 2021 году самовыдвиженцем. Второе место заняли представители СРов, третье - ЕР. Сейчас Гладышева Ирина  занимается правозащитой деятельностью в сфере ЖКХ и экологии.  А также Ирина Гладышева возглавила товарищество собственников недвижимости в своём доме.'
    },
    {
      id: 2,
      title: 'ИВАНОВ ДМИТРИЙ',
      imgLink: fotoTwoS,
      text: 'Избрался депутатом в Калининском районе Челябинска в 2021 году от партии СР, обогнав  основного оппонента более, чем в два раза. Сейчас занимается научной деятельностью и работой депутата.'
    },
    {
      id: 3,
      title: 'ДАДАЕВ ВАДИМ',
      imgLink: fotoThreeS,
      text: 'В 2019 году избрался депутатом Центрального района города Челябинска от партии Единая Россия.'
    },
    {
      id: 4,
      title: 'РОМАНОВ ИГОРЬ',
      imgLink: fotoFourS,
      text: 'В 2019 году избрался депутатом и провёл пул из трёх депутатов в поселке Красное Поле Сосновского района Челябинской области в качестве самовыдвиженцев. В настоящий момент работают депутатами и защищают права жителей в области ЖКХ.'
    },
    {
      id: 5,
      title: 'ПЕРЬМЯКОВ ИЛЬЯ',
      imgLink: fotoFiveS,
      text: 'В 2021 году избрался депутатом Калининского района города Челябинска от партии СР.'
    },
    {
      id: 6,
      title: 'БЕЛЬСКИЙ ДМИТРИЙ',
      imgLink: fotoSixS,
      text: 'В 2021 году избран депутатом Калининского района Челябинска от СР.'
    },
  ]


  return (
    <div className="containerHome">
      <div className="itemHome1">
        <div className="blockHomeItem1">
          <div className='secret30Jun'>
            <div className='secretPodBlockOne'>
              <p className='jun'>30 января</p>
              <p className='startCours'>Старт курса</p>
            </div>
            <div className='secretPodBlockTwo'>
              <p className='eaathWeek'>8 недель</p>
              <p className='longText'>Длительность</p>
            </div>
          </div>
          <div className='textOnlineCours'>
            <p className='onlineCoursSecret'>
              Онлайн курс марселя хазиева
            </p>
          </div>
          <h1 className="headerPolit2">
            ПОЛИТТЕХНОЛОГ 2.0
          </h1>
          <div className='imgSecretBlock'>
            <img style={{backgroundColor: 'red'}}
              className="imgItem4King"
              src={threeFoto}
            />
          </div>
          <div className='howDeputatsSecret'>
            <p className="textHowPolittehnologSecret">
              Как избраться депутатом или стать
              высокооплачиваемым политтехнологом
              в предвыборном штабе
            </p>
          </div>
        </div>
        <div className="blockHomeItem2">
          <p className="textMarcels">
            Онлайн курс Марселя Хазиева
          </p>
        </div>
        <div className='fotoMarcel'>
          <img style={{backgroundColor: 'red'}}
            src={oneFoto}
            className="photo"
          />
        </div>
        <div className="blockHomeItem3">
          <p className="textView2minute">
            
            Посмотрите 2-х
            минутное видео
            про курс
          </p>
          
          <a href="#bottom">

          <img
            src={twoFoto}
            className="fotoImg"
          />
          </a>
          
          
          
          
        </div>
        <div className="blockHomeItem4">
          <img style={{backgroundColor: 'red'}}
            className="imgItem4KingSecret"
            src={threeFoto}
          />
          <p className="textHowPolittehnolog">
            Как избраться депутатом или стать
            высокооплачиваемым политтехнологом
            в предвыборном штабе
          </p>
        </div>
        <div className="blockHomeItem5">
          <div className="blockItem5One">
            <p className="januaryText">30 ЯНВАРЯ</p>
            <p className="startingText">Старт курса</p>
          </div>
          <div className="blockItem5Two">
            <div className="checkListBlock">
              <img style={{backgroundColor: 'red'}}
                src={fourFoto}
                className="imgCenterOne"
              />
              <div className="textsCheks">
                <p className="checkListTextOne">
                  ЧЕК-ЛИСТ
                </p>
                <p className="checkListTextTwo">
                  “Какие знания и навыки
                  требуются, чтобы стать
                  депутатом”
                </p>
              </div>
              
              <div className="getCheckList">
                <a href="#checkList" style={{color: 'grey', textDecoration: 'none'}}>
                  ПОЛУЧИТЬ ЧЕК-ЛИСТ
                </a>
              </div>
            </div>
          </div>
          <div className="blockItem5Three">
            <p className="eathWeek">8 недель</p>
            <p className="longText">Длительность</p>
          </div>
        </div>
      </div>
      <div className="itemHome2">
      
        <p className="text2x">
          Посмотрите 2-х минутный ролик о курсе
        </p>
        <div className="classFotoOne">
        <a name="twoXCours"></a>
          <img style={{backgroundColor: 'blue'}}
            src={fiveFoto}
            className="fiveFotoOne"
          /> 
          <div className="btnGold">
            <p className="seeCurs">
              Записаться на курс
            </p>
          </div>
        </div>
      </div>
      <div className="itemHome3">
        <div className="blockItemHome3One">
          <p className="textsWeNoTeacher1">
            Мы не учим, как быть депутатом
          </p>
          <p className="textsWeNoTeacher2">
            Мы учим, как стать депутатом
          </p>
          <p className="textsWeNoTeacher3">
            Политтехнологии - это не знания из учебников и
            университетов. Политтехнологии - это опыт, который
            нарабатывается только проводя избирательные
            кампании с победным финишем.
          </p>
        </div>
        <div className="textsOnes">
          <h1 className="timeProgramm">
            Во время программы:
          </h1>
          {arrayProgOne.map(k =>
            <div key={k.id} className="arrayOne">
              <div>
                <img style={{backgroundColor: 'red'}}
                  src={iconOne}
                  className="iconOne"
                />
              </div>
              <p className="textArrayOne">
                {k.title}
              </p>
            </div>
          )}
          <p className="timeProgramm2">
            После прохождения курса
            вы сможете:
          </p>
          {arrayProgTwo.map(k =>
            <div key={k.id} className="arrayOne">
              <div>
                <img style={{backgroundColor: 'red'}}
                  src={iconTwo}
                  className="iconOne"
                />
              </div>
              <p className="textArrayOne">
                {k.title}
              </p>
            </div>
          )}
        </div>
        <div className="textsTwos">
        </div>
      </div>

      <div className='item4Secret'>
        <div className='blockMarcelHaziev'>
          <div className="imgBlockMarcelText">
            <div>
              <img style={{backgroundColor: 'red'}}
                src={iconThree}
                className="imgClass1"
              />
            </div>
            <p className="textLeadingPolittehnolog">
              Ведущий политтехнолог муниципальных
              и региональных кампаний
            </p>
            <div>
              <img style={{backgroundColor: 'red'}}
                src={iconFour}
                className="imgClass2"
              />
            </div>
          </div>
          <div className='blockMarcelHazievTwo'>
          <div>
            <h5 className='marcelHazievTextOne'>
              марсель хазиев
            </h5>
          </div>
          <img style={{backgroundColor: 'red'}}
            src={sixFoto}
            className="sixFotoMarcelHazievOne"
          />
          <p className='textLongIdei'>
            Я долго вынашивал идею уложить свой практический опыт 
            и авторский метод в онлайн курс Политтехнолог 2.0. Чтобы 
            перенести знания для людей
            со всех уголков Земли мы 
            перестроили весь процесс своей работы и реформировали 
            транслирование знаний и опыта более 60 успешных избирательных 
            кампаний в онлайн формат. Уверен, пройдя курс Политтехнолог 2.0 
            вы займете ключевые места в политической жизни своего города 
            или района
          </p>
          </div>
          <div className='blockMarcelHazievThree'>
              {arrayFour.map(k =>
                <div className="textDeputatOneSecret">
                  <img style={{backgroundColor: 'red'}}
                    src={iconSeven}
                    className="imgCheckSecret"
                  />
                  <p className="textOneTitleSecret">
                    {k.title}
                  </p>
                </div>
              )}
              <div className='arraySecurity'>
              {arrayThree.map(k =>
                <div className="arrayThreeSecret">
                  <img style={{backgroundColor: 'red'}}
                    src={k.img}
                    className="imgLinksSecret"
                  />
                  <p className="titleStyleSecret">
                    {k.title}
                  </p>
                </div>
              )}
              </div>
          </div>
          <div className='blockMarcelHazievFour'>
            <img style={{backgroundColor: 'red'}} 
              src={fotoSecret11}
              className='marcelFotoSecretOne'
            />
          </div>
          <div>
          </div>
        </div>
      </div>

      <div className="itemHome4">
        <div className='blockItemHome4One'>
          <div className='columnItem4One'>
            <div className="imgTextImgFlex">
              <div>
                <img style={{backgroundColor: 'red'}}
                  src={iconThree}
                  className="imgClass1"
                />
              </div>
              <p className="textPolittehnologOne">
                Ведущий политтехнолог муниципальных
                и региональных кампаний
              </p>
              <div>
                <img style={{backgroundColor: 'red'}}
                  src={iconFour}
                  className="imgClass2"
                />
              </div>
            </div>
            <div>
              <p className='marcelTextHeader'>марсель хазиев</p>
            </div>
            <img style={{backgroundColor: 'red'}}
              src={sixFoto}
              className="sixFoto"
            />
            <div className="textPMarcel">
              <p className="textPMarcelS">
                Я долго вынашивал идею уложить
                свой практический опыти авторский
                метод в онлайн курс Политтехнолог
                2.0. Чтобы перенести знания для
                людей со всех уголков Земли мы
                перестроили весь процесс своей
                работы и реформировали транслирование
                знаний и опыта более 60 успешных
                избирательных кампаний в онлайн формат.
                Уверен, пройдя курс Политтехнолог 2.0
                вы займете ключевые места в политической
                жизни своего города или района
              </p>
            </div>
            <div className='fotoMarcelOne'>
              <img style={{backgroundColor: 'red'}}
                src={sevenFoto}
                className="sevenFotoOne"
              />
            </div>
            <div className="linksMarcel">
              {arrayThree.map(k =>
                <div className="arrayThree">
                  <img style={{backgroundColor: 'red'}}
                    src={k.img}
                    className="imgLinks"
                  />
                  <p className="titleStyle">
                    {k.title}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="columnItem4Two">
            <div className="blockDeputatOne">
              {arrayFour.map(k =>
                <div className="textDeputatOne">
                  <img style={{backgroundColor: 'red'}}
                    src={iconSeven}
                    className="imgCheck"
                  />
                  <p className="textOneTitle">
                    {k.title}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      
      <div className='itemHome5Secret'>
        <p className='programmTeacher'>
          Программа обучения
        </p>
        <div className='imgProgramm'>
          <img style={{backgroundColor: 'red'}} 
            src={secretProgramm}
            className='secretProgrammImg'
          />
        </div>
      </div>


      <div className="itemHome5">
        <h1 className="programmTeacher">
          Программа обучения
        </h1>
        <div className='methodWorks'>
          <img style={{backgroundColor: 'red'}} 
            src={imgProgrammFon}
            className='programmCoursFoto'
          />
        </div>
      </div>
      <div className='itemHome6'>
        <Tabs />
      </div>
      <div className='itemHome7'>
        <button className='participateBtn'>
          Принять участие
        </button>
      </div>
      <div className='itemHome8'>
        <div className='studentsKeys'>
          <p className='keysStudentsText'>Кейсы наших студентов</p>
          <p className='methodMarcelsText'>
            Метод Марселя Хазиева был использован
            более чем в 60 избирательных кампаний
            муниципального и регионального уровней.
            Вот некоторые них:
          </p>
        </div>
        <div className='blockFlexSecret'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='swiperContainer'
          >
            {arrayCasesStudentsSecret.map(k =>
                <SwiperSlide>
                  <div className='blockFotoStudentsS'>
                    <img style={{backgroundColor: 'red'}} 
                      className='studentsLinkSecret'
                      src={k.imgLink}
                    />
                    <p className='titleStudentsSecret'>
                      {k.title}
                    </p>
                    <p className='textStudentsSecret'>
                      {k.text}
                    </p>
                  </div>
                </SwiperSlide>
              )}
          </Swiper>
        </div>


        <div className='blockFlex'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className='swiperContainer'
            >
              {arrayCasesStudents.map(k =>
                <SwiperSlide>
                  <div className='blockFotoStudents'>
                    <div className='namedStudentsTitle'>
                      <p className='textHeaderStudents'>{k.title}</p>
                    </div>
                    <div className='imgStudentsDiv'>
                    <img style={{backgroundColor: 'red'}}
                      className='imgSrcStudents'
                      src={k.imgLink}
                    />
                    </div>
                    <div className='rombsBlock'>
                      <img style={{backgroundColor: 'red'}} 
                        src={imgRombsStudents}
                        className='imgRombs'
                      />
                    </div>
                    <div className='textDescriptionDiv'>
                      <p className='textTitleStudents'>{k.text}</p>
                    </div>
                    
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
        </div>


      </div>
      <div className='itemHome9'>
        <p className='stopingText'>
          После окончания курса вы получите
          специализированный сертификат.
        </p>
        <img style={{backgroundColor: 'red'}}
          src={fotoSertificats}
          className='imgFotoSertificats'
        />
      </div>
      <div className='itemHome10'>
        <p className='reviewsText'>Отзывы</p>
        <div>
          <SlideTwo />
        </div>
      </div>
      <div className='itemHome11'>
        <p className='reviewsText'>
          Выберите удобный формат обучения
        </p>
        <div className='divBlockOneTarif'>
          <PriceTarif />
        </div>
      </div>

        <div className='itemHome12Secret'>
          <p className='prezentationTextSecret'>
          <a name="checkList">CSAEFDSA</a>
            Получить презентацию курса и 
            консультацию специалиста
          </p>
          <div className='blockFormSecret'>
            <input 
              placeholder='Имя'
              className='inpSecretForm'
            />
            <input 
              placeholder='Телефон'
              className='inpSecretForm'
            />
            <input 
              placeholder='e-mail'
              className='inpSecretForm'
            />
          </div>
          <button className='getSecret'>
            Получить
          </button>
          <img style={{backgroundColor: 'red'}} 
            src={secretFotoChes}
            className='chesFotoSecret'
          />
        </div>

      <div className='itemHome12'>
        <div className='blockItemHome12One'>
          <p className='textOneFollower'>
            Получить презентацию курса
            и консультацию специалиста
          </p>
          <input
            placeholder='Имя'
            className='nameInput'
          />
          <div className='groupImputsOne'>
            <input
              placeholder='Телефон'
              className='phoneInput'
            />
            <input
              placeholder='e-mail'
              className='mailInput'
            />
          </div>
          <button
            className='btnOne'
          >
            получить
          </button>
        </div>
        <div className='blockItemHome12Two'>
          <img style={{backgroundColor: 'red'}}
            src={onyOne}
            className='cheesCours'
          />
        </div>
      </div>
      <div className='itemHome13'>
        <p className='questionsTextsOne'>
          Часто задаваемые вопросы
        </p>
        <div>
          <QuestionsContainer />
        </div>
      </div>

      <div className='itemHome14Secret'>
        <div className='blockTwoItemHome14S'>
          <p className='textDogovorPublicAffertsS'>
            Договор публичной оферты
          </p>
          <p className='textDogovorPublicAffertsSTwo'>
            Политика конфиденциальности
          </p>
          <p className='textTelegaS'>
            Написать нам в Telegram
          </p>
          <p className='textlinkTelega'>
            Telegram канал
          </p>
          <p className='textEmailS'>
            e-mail: marseldigital407@gmail.com
          </p>
          <div className='supportBlockOneS'>
            <p className='supportTextS'>При поддержке:</p>
          </div>
        </div>

        <div className='blockOneItemHome14S'>
          <p className='suportTextS'>При поддержке:</p>
          <div>
            <img
              src={logoOne}
              style={{ marginTop: 30, marginLeft: 16 }}
            />
          </div>
          <div>
            <img
              src={logoTwo}
              style={{ marginTop: 36, marginLeft: 16 }}
            />
          </div>
        </div>
      </div>

      <div className='itemHome14'>
        <div className='blockOneItemHome14'>
          <p className='suportText'>При поддержке:</p>
          <div>
            <img style={{backgroundColor: 'red'}}
              src={logoOne}
            />
          </div>
          <div>
            <img style={{backgroundColor: 'red'}}
              src={logoTwo}
            />
          </div>
        </div>

        <div className='blockTwoItemHome14'>
          <p style={{ marginTop: 34 }} className='dogovorPoliceCondfind'>
            Договор публичной оферты
          </p>
          <p style={{ marginTop: 14 }} className='dogovorPoliceCondfind'>
            Политика конфиденциальности
          </p>
        </div>
        <div className='blockThreeItemHome14'>
          <p style={{ marginTop: 34 }} className='titleTelegram'>
            Написать нам Telegram<br /> (поддержка)
          </p>
          <p style={{ marginTop: 14 }} className='titleTelegram'>
            Telegram канал
          </p>
          <p style={{ marginTop: 14 }} className='titleTelegram'>
            e-mail: marseldigital407@gmail.com
            
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;

//My apologies for the delay.