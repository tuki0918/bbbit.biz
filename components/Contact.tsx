"use client";

import { motion } from "framer-motion";
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

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={inView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="space-y-8"
				>
					<iframe
						className="mx-auto"
						title="お問い合わせ"
						src="https://docs.google.com/forms/d/e/1FAIpQLSf1iar5AUyFeTrZxeCxAOhgPRA4uTjI0eVbjcaJC56p_59fdA/viewform?embedded=true"
						width="640"
						height="586"
						frameBorder={0}
						marginHeight={0}
						marginWidth={0}
					>
						読み込んでいます…
					</iframe>
				</motion.div>
			</div>
		</section>
	);
}
