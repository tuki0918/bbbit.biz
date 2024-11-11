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
							私たちは、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）を遵守すると共に、以下のプライバシーポリシーに従って個人情報を取り扱います。
						</p>
					</section>

					<section className="border-b pb-6">
						<h2 className="text-2xl font-semibold mb-4">2. 個人情報の収集</h2>
						<p className="text-gray-600 leading-relaxed mb-4">
							当サイトは、個人情報を取得する際には、その利用目的を明示し、必要な範囲で、適法かつ公正な手段によって取得いたします。
						</p>
					</section>

					<section className="border-b pb-6">
						<h2 className="text-2xl font-semibold mb-4">
							3. 個人情報の利用目的
						</h2>
						<p className="text-gray-600 leading-relaxed mb-4">
							当サイトは、取得した個人情報について、お客様ご本人の同意なくして利用目的の範囲を超えて利用することはございません。
							<br />
							以下の目的に利用いたします。
						</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>
								サービス・商品等に関するお知らせやその他の情報を提供するため
							</li>
							<li>サービス・商品の提供のため</li>
							<li>サービス・商品の利用状況を調査・分析するため</li>
							<li>お客さまからの問い合わせに対応するため</li>
						</ul>
					</section>

					<section className="border-b pb-6">
						<h2 className="text-2xl font-semibold mb-4">
							4. 個人情報の第三者提供
						</h2>
						<p className="text-gray-600 leading-relaxed">
							当サイトは、法令に基づく場合を除き、お客様の同意を得ることなく、個人情報を第三者に提供することはありません。
						</p>
					</section>

					<section className="border-b pb-6">
						<h2 className="text-2xl font-semibold mb-4">
							5. 個人情報の安全管理
						</h2>
						<p className="text-gray-600 leading-relaxed">
							当サイトは、個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、適切な安全管理措置を講じます。
						</p>
					</section>

					<section className="border-b pb-6">
						<h2 className="text-2xl font-semibold mb-4">
							6. プライバシーポリシーの改定
						</h2>
						<p className="text-gray-600 leading-relaxed">
							個人情報の取扱いに関する運用を適宜見直し、継続的な改善に努めます。
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4">7. お問い合わせ窓口</h2>
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
