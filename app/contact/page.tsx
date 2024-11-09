"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Page() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="flex-grow pt-24 pb-16 bg-gray-50"
		>
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold mb-8">CONTACT</h1>

				<div className="bg-white rounded-lg shadow-sm p-8">
					<iframe
						className="mx-auto"
						title="お問い合わせ"
						src="https://docs.google.com/forms/d/e/1FAIpQLSf1iar5AUyFeTrZxeCxAOhgPRA4uTjI0eVbjcaJC56p_59fdA/viewform?embedded=true"
						width="640"
						height="640"
						frameBorder={0}
						marginHeight={0}
						marginWidth={0}
					>
						読み込んでいます…
					</iframe>
				</div>
			</div>
		</motion.div>
	);
}
