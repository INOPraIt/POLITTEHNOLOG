import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import one from '../img/fotoStudents/one.png';
import two from '../img/fotoStudents/two.png';
import three from '../img/fotoStudents/three.png';
import four from '../img/fotoStudents/four.png';
import five from '../img/fotoStudents/five.png';
import six from '../img/fotoStudents/six.png';

const SlideOne = () => {

	const arrayFoto = [
		{
			id: 1,
			img: one,
			heightText: 583,
			name: 'ГЛАДЫШЕВА ИРИНА',
			title: 'Избралась депутатом в Центральном районе Челябинска в 2021 году самовыдвиженцем. Второе место заняли представители СРов, третье - ЕР. Сейчас Гладышева Ирина  занимается правозащитой деятельностью в сфере ЖКХ и экологии.  А также Ирина Гладышева возглавила товарищество собственников недвижимости в своём доме.',
		},
		{
			id: 2,
			img: two,
			heightText: 448,
			name: 'ИВАНОВ ДМИТРИЙ',
			title: 'Избрался депутатом в Калининском районе Челябинска в 2021 году от партии СР, обогнав  основного оппонента более, чем в два раза. Сейчас занимается научной деятельностью и работой депутата.',
		},
		{
			id: 3,
			img: three,
			heightText: 555,
			name: 'ДАДАЕВ ВАДИМ',
			title: 'В 2019 году избрался депутатом Центрального района города Челябинска от партии Единая Россия.',
		},
		{
			id: 4,
			img: four,
			heightText: 555,
			name: 'РОМАНОВ ИГОРЬ',
			title: 'В 2019 году избрался депутатом и провёл пул из трёх депутатов в поселке Красное Поле Сосновского района Челябинской области в качестве самовыдвиженцев. В настоящий момент работают депутатами и защищают права жителей в области ЖКХ.',
		},
		{
			id: 5,
			img: five,
			heightText: 555,
			name: 'ПЕРМЯКОВ ИЛЬЯ',
			title: 'В 2021 году избрался депутатом Калининского района города Челябинска от партии СР.',
		},
		{
			id: 6,
			img: six,
			heightText: 555,
			name: 'БЕЛЬСКИЙ ДМИТРИЙ',
			title: 'В 2021 году избран депутатом Калининского района Челябинска от СР.',
		},
	];

	return (
		<div>
			<Swiper
				spaceBetween={3}
				slidesPerView={2}
				// onSlideChange={() => console.log('slide change')}
				// modules={[Navigation, Pagination, Scrollbar, A11y]}
				// navigation
				// pagination={{ clickable: true }}
				// scrolldbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<p style={{ color: 'white' }}>
						awdwdawd
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<p style={{ color: 'white' }}>
						awdwdawd
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<p style={{ color: 'white' }}>
						awdwdawd
					</p>
				</SwiperSlide>
			</Swiper>
			{/* <Swiper
				spaceBetween={3}
				slidesPerView={2}
				onSlideChange={() => console.log('slide change')}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{arrayFoto.map(k =>
					<SwiperSlide>
						<div
							className='containerSlideOne'
						>
							<div className='blockSwiperSlide'>
								<div style={{
									paddingTop: 6,
									heightText: 1
								}} className='nameDivSlide'>
									{k.name}
								</div>
								<div className='imgStudentsBlock'>
									<img style={{backgroundColor: 'red'}}
										src={k.img}
										className='imgStudents'
									/>
								</div>
								<div className='blockTitleStudents'>
									<p 
										className='textTitleStudents' 
										style={{ width: k.heightText }}
									>
										{k.title}
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				)} 
			</Swiper> */}
		</div>
	)
}

export default SlideOne;