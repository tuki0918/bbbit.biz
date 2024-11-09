"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
	return (
		<section className="h-screen relative flex items-center justify-center bg-white overflow-hidden">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center z-10"
			>
				<h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
					創造と革新
				</h1>
				<p className="text-xl text-gray-600 mb-8">
					未来を見据えた価値創造のパートナー
				</p>
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
				<ArrowDown className="w-8 h-8 text-yellow-500" />
			</motion.div>

			<div className="absolute inset-0">
				<div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
				<div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
			</div>
		</section>
	);
}
