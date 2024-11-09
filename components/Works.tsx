"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const works = [
	{
		title: "企業戦略改革",
		client: "大手製造業",
		image:
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "デジタル変革支援",
		client: "金融サービス企業",
		image:
			"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "組織改革プロジェクト",
		client: "IT企業",
		image:
			"https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
	},
];

export default function Works() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className="min-h-screen bg-gray-50 py-20">
			<div className="container mx-auto px-4" ref={ref}>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-4xl font-bold text-center mb-16"
				>
					WORKS
				</motion.h2>

				<div className="grid md:grid-cols-3 gap-8">
					{works.map((work, index) => (
						<motion.div
							key={work.title}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="group relative overflow-hidden rounded-lg shadow-lg"
						>
							<div className="aspect-w-16 aspect-h-9">
								<img
									src={work.image}
									alt={work.title}
									className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
								<h3 className="text-xl font-semibold mb-2">{work.title}</h3>
								<p className="text-sm text-gray-200">{work.client}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
