import { geistMono, geistSans } from "@/app/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		template: "%s - bbbit.biz",
		default: "bbbit.biz",
	},
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
