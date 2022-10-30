import { Stack, Typography } from '@mui/material'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import ShieldIcon from '@mui/icons-material/Shield'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff'

const Transaction = () => {
	return (
		<Stack
			width='80%'
			gap={5}
			color='#424242'
			alignItems='center'
			justifyContent='space-between'
			sx={{
				margin: '10rem auto',
				flexDirection: {
					lg: 'row',
				},
			}}>
			<Stack alignItems='center' gap={2}>
				<AccessTimeFilledIcon sx={{ fontSize: '4rem' }} />
				<Typography color='#424242' variant='h5'>
					Livraison en 48h
				</Typography>
			</Stack>
			<Stack alignItems='center' gap={2}>
				<ShieldIcon sx={{ fontSize: '4rem' }} />
				<Typography color='#424242' variant='h5'>
					Transation sécurisée
				</Typography>
			</Stack>
			<Stack alignItems='center' gap={2}>
				<LocalShippingIcon sx={{ fontSize: '4rem' }} />
				<Typography color='#424242' variant='h5'>
					Retour gratuit
				</Typography>
			</Stack>
			<Stack alignItems='center' gap={2}>
				<CreditCardOffIcon sx={{ fontSize: '4rem' }} />
				<Typography color='#424242' variant='h5'>
					Livraison en 48h
				</Typography>
			</Stack>
		</Stack>
	)
}

export default Transaction
