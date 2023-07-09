import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import one from '../img/videoZaglush/1.png';
import two from '../img/videoZaglush/2.png';
import three from '../img/videoZaglush/3.png';
import four from '../img/videoZaglush/4.png';
import five from '../img/videoZaglush/5.png';
import ReactPlayer from 'react-player'

const SlideTwo = () => {

	const arrayFoto = [
		{
			id: 1,
			link: 'https://www.youtube.com/shorts/N_nlo4qjjO0',
		},
		{
			id: 2,
			img: 'https://www.youtube.com/watch?v=g6m9qADnO9A&t=247s',
		},
		{
			id: 3,
			img: 'https://www.youtube.com/watch?v=g6m9qADnO9A&t=247s',
		},
		{
			id: 4,
			img: 'https://www.youtube.com/watch?v=g6m9qADnO9A&t=247s',
		},
		{
			id: 5,
			img: 'https://www.youtube.com/watch?v=g6m9qADnO9A&t=247s',
		},
	]


	return (
		<div>
			<div className='swiperContainerSecret'>
			<Swiper
				spaceBetween={3}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
			>
				
				<SwiperSlide style={{width: '200px'}}>
						<ReactPlayer
    					className='react-player'
          		url='https://www.youtube.com/shorts/N_nlo4qjjO0'
							width={'90%'}
          		height='600px'
							style={{ marginTop: '100px'}}
        		/>
							kljfkirfik
					</SwiperSlide>
					<SwiperSlide>
						<ReactPlayer
    					className='react-player'
          		url='https://www.youtube.com/shorts/N_nlo4qjjO0'
							width={'90%'}
          		height='600px'
							style={{marginTop: '100px'}}
        		/>
							kljfkirfik
					</SwiperSlide>
					<SwiperSlide>
						<ReactPlayer
    					className='react-player'
          		url='https://www.youtube.com/shorts/N_nlo4qjjO0'
							width={'90%'}
          		height='600px'
							style={{marginTop: '100px'}}
        		/>
							kljfkirfik
					</SwiperSlide>
					<SwiperSlide>
						<ReactPlayer
    					className='react-player'
          		url='https://www.youtube.com/shorts/N_nlo4qjjO0'
							width={'90%'}
          		height='600px'
							style={{marginTop: '100px'}}
        		/>
							kljfkirfik
					</SwiperSlide>
					<SwiperSlide>
						<ReactPlayer
    					className='react-player'
          		url='https://www.youtube.com/shorts/N_nlo4qjjO0'
							width={'90%'}
          		height='600px'
							style={{marginTop: '100px'}}
        		/>
							kljfkirfik
					</SwiperSlide>
			</Swiper>
			</div>
			<div className='swiperContainer'>
			<Swiper
				spaceBetween={3}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
			>
				
				<SwiperSlide style={{width: '200px'}}>
						<ReactPlayer
    					className='react-player'
          		url='https://www.youtube.com/shorts/N_nlo4qjjO0'
							width={'90%'}
          		height='600px'
							style={{ marginTop: '100px'}}
        		/>
							kljfkirfik
					</SwiperSlide>
					<SwiperSlide>
						<ReactPlayer
    					className='react-player'
          		url='https://www.youtube.com/shorts/N_nlo4qjjO0'
							width={'90%'}
          		height='600px'
							style={{marginTop: '100px'}}
        		/>
							kljfkirfik
					</SwiperSlide>
					<SwiperSlide>
						<ReactPlayer
    					className='react-player'
          		url='https://www.youtube.com/shorts/N_nlo4qjjO0'
							width={'90%'}
          		height='600px'
							style={{marginTop: '100px'}}
        		/>
							kljfkirfik
					</SwiperSlide>
					<SwiperSlide>
						<ReactPlayer
    					className='react-player'
          		url='https://www.youtube.com/shorts/N_nlo4qjjO0'
							width={'90%'}
          		height='600px'
							style={{marginTop: '100px'}}
        		/>
							kljfkirfik
					</SwiperSlide>
					<SwiperSlide>
						<ReactPlayer
    					className='react-player'
          		url='https://www.youtube.com/shorts/N_nlo4qjjO0'
							width={'90%'}
          		height='600px'
							style={{marginTop: '100px'}}
        		/>
							kljfkirfik
					</SwiperSlide>
			</Swiper>
			</div>
		</div>
	)
}

export default SlideTwo;