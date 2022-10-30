import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite'
import InstagramIcon from '@mui/icons-material/Instagram'

const instaImg = [
	{
		id: 1,
		img: '/images/insta-1.jpg',
	},
	{
		id: 2,
		img: '/images/insta-2.jpg',
	},
	{
		id: 3,
		img: '/images/insta-3.jpg',
	},
	{
		id: 4,
		img: '/images/insta-4.jpg',
	},
	{
		id: 5,
		img: '/images/insta-5.jpg',
	},
	{
		id: 6,
		img: '/images/insta-6.jpg',
	},
	{
		id: 7,
		img: '/images/insta-7.jpg',
	},
	{
		id: 8,
		img: '/images/insta-8.jpg',
	},
]

const Instagram = () => {
	return (
		<Container sx={{ marginTop: '8rem' }} width={'90%'}>
			<Box mb={10}>
				<Typography
					display='flex'
					alignItems='center'
					justifyContent='center'
					gap={2}
					color='#B71C1C'
					textAlign='center'
					variant='h3'
					mb={2}>
					Vous et votre écharpe <InstagramIcon fontSize='20px' />
				</Typography>
				<Divider width={'50%'} sx={{ margin: '2rem auto' }} />
				<Typography
					display='flex'
					alignItems='center'
					justifyContent='center'
					gap={2}
					color='#B71C1C'
					textAlign='center'
					variant='h5'>
					Parce que notre passion, c&apos;est vous ! <FavoriteIcon />
				</Typography>
			</Box>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={0}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					475: {
						slidesPerView: 2,
					},
					900: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 4,
					},
				}}
				navigation
				pagination={{ clickable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}>
				{instaImg.map(item => (
					<SwiperSlide key={item.img}>
						<Box
							sx={{
								backgroundImage: `url(${item.img})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								minWidth: '250px',
								height: '350px',
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={0}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					475: {
						slidesPerView: 2,
					},
					900: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3,
					},
				}}
				navigation
				pagination={{ clickable: true }}
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}>
				{instaImg.reverse().map(item => (
					<SwiperSlide key={item.img}>
						<Box
							sx={{
								backgroundImage: `url(${item.img})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								minWidth: '250px',
								height: '350px',
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	)
}

export default Instagram
