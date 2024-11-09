"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
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
					お問い合わせ
				</motion.h2>

				<div className="grid md:grid-cols-2 gap-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						<div className="flex items-start space-x-4">
							<Mail className="w-6 h-6 text-yellow-500 mt-1" />
							<div>
								<h3 className="text-lg font-semibold mb-2">
									メールでのお問い合わせ
								</h3>
								<p className="text-gray-600">info@example.com</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<Phone className="w-6 h-6 text-yellow-500 mt-1" />
							<div>
								<h3 className="text-lg font-semibold mb-2">
									お電話でのお問い合わせ
								</h3>
								<p className="text-gray-600">03-1234-5678</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<MapPin className="w-6 h-6 text-yellow-500 mt-1" />
							<div>
								<h3 className="text-lg font-semibold mb-2">所在地</h3>
								<p className="text-gray-600">
									〒100-0001
									<br />
									東京都千代田区1-1-1
								</p>
							</div>
						</div>
					</motion.div>

					<motion.form
						initial={{ opacity: 0, x: 20 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6 }}
						className="space-y-6"
					>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								お名前
							</label>
							<input
								type="text"
								name="name"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								メールアドレス
							</label>
							<input
								type="email"
								name="email"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700 mb-2"
							>
								お問い合わせ内容
							</label>
							<textarea
								rows={4}
								name="message"
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
						>
							送信する
						</button>
					</motion.form>
				</div>
			</div>
		</section>
	);
}
