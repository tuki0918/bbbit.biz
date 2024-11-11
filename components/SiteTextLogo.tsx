import { sourGummy } from "@/app/fonts";
import { SITE_NAME } from "@/config/app";
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
			{SITE_NAME}
		</span>
	);
};

export default SiteTextLogo;
