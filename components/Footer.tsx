"use client";

import type React from "react";
import { scrollToElement } from "../utils/scroll";

export default function Footer() {
	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const elementId = href.replace("#", "");
		scrollToElement(elementId);
	};

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
								<a
									href="#services"
									className="text-gray-600 hover:text-yellow-500 transition-colors"
									onClick={(e) => handleNavClick(e, "#services")}
								>
									事業内容
								</a>
							</li>
							<li>
								<a
									href="#works"
									className="text-gray-600 hover:text-yellow-500 transition-colors"
									onClick={(e) => handleNavClick(e, "#works")}
								>
									実績
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="text-gray-600 hover:text-yellow-500 transition-colors"
									onClick={(e) => handleNavClick(e, "#contact")}
								>
									お問い合わせ
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-gray-900 mb-4">法的情報</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="/privacy"
									className="text-gray-600 hover:text-yellow-500 transition-colors"
								>
									プライバシーポリシー
								</a>
							</li>
							<li>
								<a
									href="/legal"
									className="text-gray-600 hover:text-yellow-500 transition-colors"
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