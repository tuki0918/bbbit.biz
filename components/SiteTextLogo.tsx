import { sourGummy } from "@/app/fonts";
import { cn } from "@/lib/utils";
import type { FC } from "react";

const SiteTextLogo: FC<{
	isDark?: boolean;
}> = ({ isDark }) => {
	return (
		<span
			className={cn(sourGummy.className, "font-bold text-4xl", {
				"text-yellow-400": !isDark,
				"text-white": isDark,
			})}
		>
			bbbit
		</span>
	);
};

export default SiteTextLogo;
