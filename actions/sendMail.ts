"use server";

import { transporter } from "@/utils/mail";

export async function sendMail({
	name,
	email,
	subject,
	message,
}: {
	name: string;
	email: string;
	subject: string;
	message: string;
}) {
	// Errors must be caught on server-side
	try {
		const to = process.env.MAIL_SERVER_TO;
		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to,
			subject,
			text: message,
		});
	} catch (error) {
		console.error(error);
		throw new Error("Failed to send mail");
	}
}
