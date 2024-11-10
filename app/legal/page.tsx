import Legal from "@/components/Legal";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "特定商取引法に基づく表記",
	};
}

export default function Page() {
	return (
		<>
			<Legal />
		</>
	);
}
