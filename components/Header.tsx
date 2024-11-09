"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { scrollToElement } from "../utils/scroll";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const elementId = href.replace("#", "");
		scrollToElement(elementId);
		setIsMobileMenuOpen(false);
	};

	const menuItems = [
		{ label: "トップ", href: "#top" },
		{ label: "事業内容", href: "#services" },
		{ label: "実績", href: "#works" },
		{ label: "お問い合わせ", href: "#contact" },
	];

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? "bg-white/90 backdrop-blur-sm shadow-md"
						: "bg-transparent"
				}`}
			>
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						<a
							href="#top"
							className="text-xl font-bold text-yellow-500"
							onClick={(e) => handleNavClick(e, "#top")}
						>
							Company
						</a>

						{/* Desktop Menu */}
						<nav className="hidden md:flex space-x-8">
							{menuItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="text-gray-700 hover:text-yellow-500 transition-colors"
									onClick={(e) => handleNavClick(e, item.href)}
								>
									{item.label}
								</a>
							))}
						</nav>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-gray-700"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="fixed inset-x-0 top-16 z-40 md:hidden bg-white shadow-lg"
					>
						<nav className="container mx-auto px-4 py-4">
							{menuItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="block py-3 text-gray-700 hover:text-yellow-500 transition-colors"
									onClick={(e) => handleNavClick(e, item.href)}
								>
									{item.label}
								</a>
							))}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
