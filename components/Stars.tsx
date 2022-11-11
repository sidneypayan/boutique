import { Rating, Stack } from '@mui/material'
import React from 'react'

const Stars = () => {
	return (
		<Stack spacing={1} marginBottom={1}>
			<Rating
				name='half-rating-read'
				defaultValue={4.5}
				precision={0.5}
				readOnly
			/>
		</Stack>
	)
}

export default Stars
