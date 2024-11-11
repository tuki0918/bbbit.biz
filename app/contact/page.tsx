import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "CONTACT",
	};
}

export default function Page() {
	return (
		<>
			<ContactForm />
		</>
	);
}
