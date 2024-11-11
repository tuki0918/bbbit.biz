"use client";

import { sourGummy } from "@/app/fonts";
import { SITE_DESCRIPTION, SITE_NAME } from "@/config/app";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div className="col-span-2">
						<h3
							className={cn(
								sourGummy.className,
								"text-2xl font-bold text-yellow-500 mb-4",
							)}
						>
							<Link href="/">{SITE_NAME}</Link>
						</h3>
						<p className="text-sm text-gray-600 mb-4">{SITE_DESCRIPTION}</p>
					</div>

					<div>
						<h4 className="font-semibold text-gray-900 mb-4">MENU</h4>
						<ul className="space-y-2">
							<li>
								<Link
									href="/#business"
									className="text-gray-600 hover:text-yellow-500 transition-colors hover:cursor-pointer"
								>
									事業内容
								</Link>
							</li>
							<li>
								<Link
									href="/#works"
									className="text-gray-600 hover:text-yellow-500 transition-colors hover:cursor-pointer"
								>
									実績
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold text-gray-900 mb-4">LINKS</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="/legal"
									className="text-gray-600 hover:text-yellow-500 transition-colors hover:cursor-pointer"
								>
									特定商取引法に基づく表記
								</a>
							</li>
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
									href="/contact"
									className="text-gray-600 hover:text-yellow-500 transition-colors hover:cursor-pointer"
								>
									お問い合わせ
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-200 pt-8">
					<p className="text-center text-gray-600 text-sm">
						&copy; 2024 bbbit. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
