import NextAuth, { NextAuthOptions } from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../lib/prisma'
// import GoogleProvider from 'next-auth/providers/google'
// import AppleProvider from 'next-auth/providers/apple'
export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID,
			clientSecret: process.env.FACEBOOK_SECRET,
		}),
		// GoogleProvider({
		// 	clientId: process.env.GOOGLE_ID,
		// 	clientSecret: process.env.GOOGLE_SECRET,
		// }),
		// AppleProvider({
		// 	clientId: process.env.APPLE_ID,
		// 	clientSecret: process.env.APPLE_SECRET,
		// }),
	],
	theme: {
		colorScheme: 'light',
	},
	// pages: {
	// 	signIn: '/auth/signin',
	// },
}
export default NextAuth(authOptions)
