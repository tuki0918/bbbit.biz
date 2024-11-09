"use client";

import type React from "react";
import { Link } from "react-scroll";

export default function Footer() {
	return (
		<footer className="bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div className="col-span-2">
						<h3 className="text-xl font-bold text-yellow-500 mb-4">Company</h3>
						<p className="text-gray-600 mb-4">
							未来を見据えた価値創造のパートナーとして、
							お客様のビジネスの成長をサポートいたします。
						</p>
						<p className="text-gray-600">
							〒100-0001
							<br />
							東京都千代田区1-1-1
						</p>
					</div>

					<div>
						<h4 className="font-semibold text-gray-900 mb-4">リンク</h4>
						<ul className="space-y-2">
							<li>
								<Link
									to="services"
									smooth={true}
									duration={500}
									className="text-gray-600 hover:text-yellow-500 transition-colors hover:cursor-pointer"
								>
									事業内容
								</Link>
							</li>
							<li>
								<Link
									to="works"
									smooth={true}
									duration={500}
									className="text-gray-600 hover:text-yellow-500 transition-colors hover:cursor-pointer"
								>
									実績
								</Link>
							</li>
							<li>
								<Link
									to="contact"
									smooth={true}
									duration={500}
									className="text-gray-600 hover:text-yellow-500 transition-colors hover:cursor-pointer"
								>
									お問い合わせ
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-gray-900 mb-4">法的情報</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="/privacy"
									className="text-gray-600 hover:text-yellow-500 transition-colors hover:cursor-pointer"
								>
									プライバシーポリシー
								</a>
							</li>
							<li>
								<a
									href="/legal"
									className="text-gray-600 hover:text-yellow-500 transition-colors hover:cursor-pointer"
								>
									特定商取引法について
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-200 pt-8">
					<p className="text-center text-gray-600 text-sm">
						© {new Date().getFullYear()} Company. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
