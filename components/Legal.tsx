"use client";

import QuoteAccordion from "@/components/QuoteAccordion";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="flex-grow py-6 bg-gray-50"
		>
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold mb-8">特定商取引法に基づく表記</h1>

				<div className="bg-white rounded-lg shadow-sm p-8">
					<div className="space-y-8">
						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">事業者名</h2>
							<p className="text-gray-600">屋号：bbbit（ビビビット）</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">代表者名</h2>
							<p className="text-gray-600">山本 雄大</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">所在地</h2>
							<p className="text-gray-600">
								ご請求をいただいた場合は、遅滞なく開示いたします。
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">電話番号</h2>
							<p className="text-gray-600">
								ご請求をいただいた場合は、遅滞なく開示いたします。
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">メールアドレス</h2>
							<p className="text-gray-600">contact@bbbit.biz</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">販売価格</h2>
							<p className="text-gray-600">
								各商品の紹介ページに記載している価格とします。
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">支払方法</h2>
							<p className="text-gray-600">
								クレジットカードまたは国内の銀行振込
							</p>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-3">決済期間</h2>
							<p className="text-gray-600">
								クレジットカード決済：ご注文時にお支払いが確定します。
							</p>
							<p className="text-gray-600 mt-2">
								銀行振込：注文から 3日以内にお振り込みいただく必要があります。
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">商品以外の必要料金</h2>
							<p className="text-gray-600 mt-2">
								＜配送が必要な商品＞
								<br />
								・配送料（全国一律 1,000円 / 箱）
							</p>
							<p className="text-gray-600">
								＜銀行振込でご購入の際＞
								<br />
								振込手数料
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

						<div>
							<h2 className="text-lg font-semibold mb-3">
								キャンセル・返品・不良品
							</h2>
							<p className="text-gray-600">
								購入後のお客様都合によるキャンセルや返品はお受けできません。
							</p>
							<p className="text-gray-600 mt-2">
								＜商品に不備がある場合＞
								<br />
								瑕疵対応として返金又は新しい商品と交換いたします。商品到着後7日以内にメールにてご連絡ください。
							</p>
							<p className="text-gray-600 mt-2">
								＜デジタルコンテンツ＞
								<br />
								デジタルコンテンツの特性上、返品が不可能であるため、購入確定後のキャンセル・返金についてはお受けできません。
								<br />
								なお、購入されたコンテンツが閲覧できないなどの場合は、お問合せください。
							</p>
						</div>

						<div>
							<h2 className="text-lg font-semibold mb-3">
								ソフトウェアの動作環境
							</h2>
							<div className="text-gray-600">
								<QuoteAccordion
									title={"動作環境"}
									quote={`
									動作環境等は各ソフトウェア・データ類の商品ページに表示しております。
									`}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
