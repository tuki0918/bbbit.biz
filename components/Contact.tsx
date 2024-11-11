"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Contact() {
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
					CONTACT
				</motion.h2>

				<div className="flex items-center justify-center">
					<div>
						<div className="mb-16 w-3/4 md:w-auto mx-auto">
							サービスや製品に関するご相談など、お気軽にお問い合わせください。
						</div>

						<Link
							className="group mt-8 w-[280px] mx-auto md:ml-auto p-3 bg-sky-950 hover:bg-sky-900 text-white rounded-full font-bold flex justify-between items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
							href="/contact"
						>
							<div className="flex-1 text-center pl-4">
								お問い合わせはこちら
							</div>
							<ChevronRight className="transition group-hover:translate-x-1" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
