"use client";

import { motion } from "framer-motion";
import { FileHeart, Rocket, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";

const business = [
	{
		icon: Rocket,
		title: "ソフトウェアの開発",
		description: "...",
	},
	{
		icon: FileHeart,
		title: "デジタルコンテンツの制作・販売",
		description: "...",
	},
	{
		icon: Users,
		title: "インターネットサービスの運営",
		description: "...",
	},
];

export default function Business() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className="min-h-screen bg-white flex items-center justify-center py-20">
			<div className="container mx-auto px-4" ref={ref}>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-4xl font-bold text-center mb-16"
				>
					事業内容
				</motion.h2>

				<div className="grid md:grid-cols-3 gap-8">
					{business.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<item.icon className="w-12 h-12 text-yellow-500 mb-6" />
							<h3 className="text-xl font-semibold mb-4">{item.title}</h3>
							<p className="text-gray-600">{item.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
