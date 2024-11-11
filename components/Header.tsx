"use client";

import SiteTextLogo from "@/components/SiteTextLogo";
import Link from "next/link";

export default function Header() {
	return (
		<>
			<header className="bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						<Link
							href="/"
							className="text-xl font-bold text-yellow-500 hover:cursor-pointer"
						>
							<SiteTextLogo />
						</Link>
					</div>
				</div>
			</header>
		</>
	);
}
