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
				<h1 className="text-4xl font-bold mb-8">特定商取引法に基づく表記</h1>

				<div className="bg-white rounded-lg shadow-sm p-8">
					<div className="space-y-8">
						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">屋号</h2>
							<p className="text-gray-600">bbbit（ビビビット）</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">代表者名</h2>
							<p className="text-gray-600">山本 雄大</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">所在地</h2>
							<p className="text-gray-600">
								請求があれば、遅滞なく開示します。
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">電話番号</h2>
							<p className="text-gray-600">
								請求があれば、遅滞なく開示します。
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">メールアドレス</h2>
							<p className="text-gray-600">contact@bbbit.biz</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">支払方法</h2>
							<p className="text-gray-600">
								クレジットカードまたは国内の銀行振込
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">商品引渡し時期</h2>
							<p className="text-gray-600">
								＜配送が必要な商品＞
								<br />
								注文は 3 ～ 5 営業日以内に処理され、商品は 14
								日以内に到着します。
							</p>
							<p className="text-gray-600 mt-2">
								＜デジタルコンテンツ＞
								<br />
								注文後すぐにご利用いただけます。
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">商品以外の必要料金</h2>
							<p className="text-gray-600">
								＜配送が必要な商品＞
								<br />
								・配送料（全国一律 1,000円 / 箱）
							</p>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-3">
								返品・キャンセル・不良品
							</h2>
							<p className="text-gray-600">
								ご注文内容と異なる、商品に欠陥がある場合を除き、返品・キャンセルには応じかねます。
								<br />
								商品に不備がある場合は、商品到着後7日以内にメールにてご連絡ください。
							</p>
							<p className="text-gray-600 mt-2">
								＜デジタルコンテンツ＞
								<br />
								キャンセルを希望される場合は、お申込みから7日以内にメールにてお問い合わせをお願いいたします。
								サービス提供後のキャンセル・返金には応じかねます。
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
