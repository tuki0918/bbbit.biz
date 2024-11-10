"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const menuItems: {
		label: string;
		href: string;
	}[] = [
		{ label: "BUSINESS", href: "business" },
		{ label: "WORKS", href: "works" },
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
						<Link
							to="top"
							smooth={true}
							duration={500}
							className="text-xl font-bold text-yellow-500 hover:cursor-pointer"
						>
							bbbit
						</Link>

						{/* Desktop Menu */}
						<nav className="hidden md:flex space-x-8">
							{menuItems.map((item) => (
								<Link
									key={item.label}
									to={item.href}
									smooth={true}
									duration={500}
									className="text-gray-700 hover:text-yellow-500 transition-colors hover:cursor-pointer"
								>
									{item.label}
								</Link>
							))}
						</nav>

						{/* Mobile Menu Button */}
						<button
							type="button"
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
								<Link
									key={item.label}
									to={item.href}
									smooth={true}
									duration={500}
									className="block py-3 text-gray-700 hover:text-yellow-500 transition-colors hover:cursor-pointer"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{item.label}
								</Link>
							))}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
