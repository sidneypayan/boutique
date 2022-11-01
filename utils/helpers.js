export const formatPrice = number => {
	const newNumber = Intl.NumberFormat('fr-FR', {
		style: 'currency',
		currency: 'EUR',
	}).format(number / 100)
	return newNumber
}
