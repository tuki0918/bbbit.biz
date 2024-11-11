"use client";

import { ChevronDown } from "lucide-react";
import type { FC } from "react";
import { useState } from "react";

const QuoteAccordion: FC<{
	title: string;
	quote: string;
}> = ({ title, quote }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="group border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-slate-300">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full p-6 flex items-center justify-between bg-white text-left"
			>
				<span className="text-slate-700 line-clamp-1">{title}</span>
				<ChevronDown
					className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>
			<div
				className={`overflow-hidden transition-all duration-300 bg-slate-50 ${
					isOpen ? "max-h-48" : "max-h-0"
				}`}
			>
				<div className="p-6 border-t border-slate-200">
					<p className="text-sm text-slate-700">{quote}</p>
				</div>
			</div>
		</div>
	);
};

export default QuoteAccordion;
