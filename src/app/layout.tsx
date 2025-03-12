import './styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
	title: '{{NAME}}',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<html lang="en">
		<body className={`${inter.variable} antialiased font-sans`}>{children}</body>
	</html>
)

export default RootLayout
