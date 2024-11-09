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
				<h1 className="text-4xl font-bold mb-8">特定商取引法に基づく表記</h1>

				<div className="bg-white rounded-lg shadow-sm p-8">
					<div className="space-y-8">
						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">事業者の名称</h2>
							<p className="text-gray-600">株式会社Company</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">代表者名</h2>
							<p className="text-gray-600">代表取締役 山田 太郎</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">所在地</h2>
							<p className="text-gray-600">
								〒100-0001
								<br />
								東京都千代田区1-1-1
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">連絡先</h2>
							<p className="text-gray-600">
								電話番号：03-1234-5678
								<br />
								メールアドレス：info@example.com
								<br />
								受付時間：平日9:00～17:00
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">料金</h2>
							<p className="text-gray-600">
								サービス料金は、個別のご相談内容に応じて設定させていただきます。
								<br />
								具体的な料金については、お見積りの際に提示させていただきます。
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">支払方法</h2>
							<p className="text-gray-600">
								銀行振込（お支払い条件は個別契約に基づきます）
							</p>
						</div>

						<div className="border-b pb-6">
							<h2 className="text-lg font-semibold mb-3">契約の解除</h2>
							<p className="text-gray-600">
								契約の解除については、個別の契約内容に基づき対応させていただきます。
								<br />
								詳細は契約書をご確認ください。
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
