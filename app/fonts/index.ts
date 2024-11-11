import { M_PLUS_Rounded_1c } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = localFont({
	src: "./GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

export const geistMono = localFont({
	src: "./GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const sourGummy = localFont({
	src: "./SourGummyVF.ttf",
	variable: "--font-sour-gummy",
	weight: "100 900",
});

export const mPlusRounded1c = M_PLUS_Rounded_1c({
	weight: "400",
	subsets: ["latin"],
});
