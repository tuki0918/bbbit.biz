"use client";

import { motion } from "framer-motion";

export default function Contact() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="flex-grow py-6 bg-gray-50"
		>
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold mb-8">お問い合わせフォーム</h1>

				<div className="bg-white rounded-lg shadow-sm p-8">
					<section className="border-b pb-6 mb-6">
						<p className="text-gray-600 leading-relaxed">
							下記フォームにご入力ください。
							<br />※
							ご記入漏れがある場合、お問い合わせにお答えできない場合がございます。
						</p>
					</section>

					<iframe
						className="mx-auto"
						title="お問い合わせ"
						src="https://docs.google.com/forms/d/e/1FAIpQLScBG5HiL4CFRe9LMaYC3Fvs3DKHcYAK-yXYEZLTZ9joRL8uNw/viewform?embedded=true"
						width="640"
						height="720"
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
