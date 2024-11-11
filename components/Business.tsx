"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";

const business = [
	{
		icon: Lightbulb,
		title: "戦略コンサルティング",
		description:
			"ビジネス戦略の策定から実行まで、包括的なサポートを提供します。",
	},
	{
		icon: Rocket,
		title: "デジタルトランスフォーメーション",
		description:
			"最新技術を活用し、ビジネスプロセスの効率化と革新を実現します。",
	},
	{
		icon: Users,
		title: "人材育成支援",
		description: "次世代リーダーの育成と組織力の強化をサポートします。",
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
