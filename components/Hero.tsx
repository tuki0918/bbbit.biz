"use client";

import { sourGummy } from "@/app/fonts";
import { SITE_NAME } from "@/config/app";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight, CircleArrowDown } from "lucide-react";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

export default function Hero() {
	return (
		<section className="h-screen relative flex items-center justify-center bg-amber-400 overflow-hidden">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center z-10"
			>
				<h1
					className={cn(
						sourGummy.className,
						"text-6xl font-bold text-orange-950 mb-6",
					)}
				>
					{SITE_NAME}
				</h1>
				<p className="mb-12 w-3/4 md:w-auto mx-auto">
					私たちは、お客様の日常が楽しくなるような「
					<span className="font-bold text-xl">ビビビ</span>
					」をお届けします。
				</p>

				{/* <p>
					<Link
						className="group mt-8 w-[280px] mx-auto md:ml-auto p-3 bg-orange-950 hover:bg-orange-900 text-white rounded-full font-bold flex justify-between items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
						href="/"
					>
						<div className="flex-1 text-center pl-4">About US</div>
						<ChevronRight className="transition group-hover:translate-x-1" />
					</Link>
				</p> */}
			</motion.div>

			<motion.div
				animate={{
					y: [0, 10, 0],
				}}
				transition={{
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				className="absolute bottom-8"
			>
				<Scroll
					to="business"
					smooth={true}
					duration={500}
					className="hover:cursor-pointer"
				>
					<CircleArrowDown className="w-12 h-12 text-orange-950" />
				</Scroll>
			</motion.div>
		</section>
	);
}
