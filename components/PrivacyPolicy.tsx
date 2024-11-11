"use client";

import { motion } from "framer-motion";

export default function Hero() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="flex-grow pt-6 pb-16 bg-gray-50"
		>
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold mb-8">プライバシーポリシー</h1>

				<div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
					<section className="border-b pb-6">
						<h2 className="text-2xl font-semibold mb-4">
							1. 個人情報の取り扱いについて
						</h2>
						<p className="text-gray-600 leading-relaxed">
							当サイトは、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下「個人情報保護法」）を遵守すると共に、以下のプライバシーポリシーに従って個人情報を取り扱います。
						</p>
					</section>

					<section className="border-b pb-6">
						<h2 className="text-2xl font-semibold mb-4">
							2. 個人情報の収集・利用目的
						</h2>
						<p className="text-gray-600 leading-relaxed mb-4">
							当サイトは、以下の目的で個人情報を収集・利用いたします：
						</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>サービスの提供、維持、保護及び改善のため</li>
							<li>お客様からのお問い合わせ対応のため</li>
							<li>新サービスの開発及び調査分析のため</li>
							<li>当社からの重要なお知らせの送付のため</li>
						</ul>
					</section>

					<section className="border-b pb-6">
						<h2 className="text-2xl font-semibold mb-4">
							3. 個人情報の第三者提供
						</h2>
						<p className="text-gray-600 leading-relaxed">
							当サイトは、法令に基づく場合を除き、お客様の同意を得ることなく、個人情報を第三者に提供することはありません。
						</p>
					</section>

					<section className="border-b pb-6">
						<h2 className="text-2xl font-semibold mb-4">
							4. 個人情報の安全管理
						</h2>
						<p className="text-gray-600 leading-relaxed">
							当サイトは、個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、適切な安全管理措置を講じます。
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">5. お問い合わせ窓口</h2>
						<p className="text-gray-600 leading-relaxed">
							個人情報の取り扱いに関するお問い合わせは、下記の窓口までご連絡ください。
						</p>
						<p className="text-gray-600 leading-relaxed mt-2">
							メールアドレス：
							<span className="bg-gray-100 p-1">contact@bbbit.biz</span>
						</p>
					</section>
				</div>
			</div>
		</motion.div>
	);
}
