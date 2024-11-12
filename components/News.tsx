"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const news = [
	{
		id: 1,
		date: "2024-11-11",
		category: "お知らせ",
		title: "本サイト開設",
		content: "https://bbbit.biz/",
	},
];

export default function News() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className="min-h-screen bg-gray-100 flex items-center justify-center py-20">
			<div className="container mx-auto px-4" ref={ref}>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-4xl font-bold text-center mb-16"
				>
					ニュース
				</motion.h2>

				<div className="space-y-6">
					{news.map((item) => (
						<article
							key={item.id}
							className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
						>
							<div className="p-6">
								<div className="flex items-center space-x-4 mb-3">
									<div className="flex items-center text-gray-600">
										<Calendar className="h-4 w-4 mr-1" />
										<time>{item.date}</time>
									</div>
									<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
										{item.category}
									</span>
								</div>
								<h2 className="text-xl font-bold text-gray-900 mb-2">
									{item.title}
								</h2>
								<div className=" text-gray-600">{item.content}</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
