import { geistMono, geistSans, mPlusRounded1c } from "@/app/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_DOMAIN, SITE_NAME_JP } from "@/config/app";

export const metadata: Metadata = {
	title: {
		template: `%s - ${SITE_DOMAIN}`,
		default: `${SITE_NAME_JP} - ${SITE_DOMAIN}`,
	},
	description: SITE_DESCRIPTION,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${mPlusRounded1c.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
