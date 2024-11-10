import PrivacyPolicy from "@/components/PrivacyPolicy";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "プライバシーポリシー",
	};
}

export default function Page() {
	return (
		<>
			<PrivacyPolicy />
		</>
	);
}
