import { sourGummy } from "@/app/fonts";
import type { FC } from "react";

const SiteTextLogo: FC = () => {
	return (
		<span
			className={`${sourGummy.className} font-bold text-4xl text-yellow-400`}
		>
			bbbit
		</span>
	);
};

export default SiteTextLogo;
