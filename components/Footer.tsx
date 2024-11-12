"use client";

import { geistSans, sourGummy } from "@/app/fonts";
import { SITE_DESCRIPTION, SITE_NAME, SITE_NAME_JP } from "@/config/app";
import { cn } from "@/lib/utils";
import { BookOpen, Store } from "lucide-react";
import Link from "next/link";

const menus = [
	{
		label: "ニュース",
		href: "/#news",
	},
	{
		label: "事業内容",
		href: "/#business",
	},
	{
		label: "商品・サービス",
		href: "/#works",
	},
] as const;

const links = [
	{
		label: "特定商取引法に基づく表記",
		href: "/legal",
	},
	{
		label: "プライバシーポリシー",
		href: "/privacy",
	},
	{
		label: "お問い合わせ",
		href: "/contact",
	},
] as const;

export default function Footer() {
	return (
		<footer className="bg-gray-50 pt-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-6 gap-8 mb-8">
					<div className="col-span-3">
						<h3 className={cn(sourGummy.className, "text-4xl font-bold mb-4")}>
							<Link href="/">
								{SITE_NAME}
								<span className="text-xs">（{SITE_NAME_JP}）</span>
							</Link>
						</h3>
						<p className="text-sm text-gray-600 mb-4">{SITE_DESCRIPTION}</p>
						<p className="text-sm text-gray-600 mb-4 space-x-2 flex">
							<Link href="/" title="X:準備中">
								<span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-black inline-block">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<title>X</title>
										{/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
										<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
									</svg>
								</span>
							</Link>
							<Link href="/" title="note:準備中">
								<BookOpen />
							</Link>
							<Link href="/" title="shop:準備中">
								<Store />
							</Link>
						</p>
					</div>

					<div className="col-span-1">
						<h4
							className={cn(
								geistSans.className,
								"font-bold text-gray-900 mb-4",
							)}
						>
							MENU
						</h4>
						<ul className="space-y-2">
							{menus.map((menu) => (
								<li key={menu.label}>
									<Link
										href={menu.href}
										className="text-gray-600 hover:text-gray-400 transition-colors hover:cursor-pointer"
									>
										{menu.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="col-span-2">
						<h4
							className={cn(
								geistSans.className,
								"font-bold text-gray-900 mb-4",
							)}
						>
							LINKS
						</h4>
						<ul className="space-y-2">
							{links.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-gray-600 hover:text-gray-400 transition-colors hover:cursor-pointer"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-200 p-8">
					<p className="text-center text-gray-600 text-sm">
						&copy; 2024 bbbit. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
