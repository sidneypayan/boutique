import { Box, Button } from '@mui/material'

const Hero = () => {
	return (
		<Box
			width={720}
			maxWidth={'100%'}
			margin='0 auto'
			position='relative'
			mt={5}>
			<video width={'100%'} src='/video.mp4' autoPlay loop muted></video>
			<Button
				variant='contained'
				size='large'
				sx={{
					position: 'absolute',
					display: 'block',
					bottom: '-15px',
					left: '50%',
					transform: 'translate(-50%)',
					borderRadius: '0',
				}}>
				Collection
			</Button>
		</Box>
	)
}

export default Hero
