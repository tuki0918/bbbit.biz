"use client";

import { sendMail } from "@/actions/sendMail";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	name: z.string().min(1, "名前は必須です"),
	email: z.string().email("正しいメールアドレスを入力してください"),
	subject: z.string().min(1, "件名は必須です"),
	message: z.string().min(1, "メッセージは必須です"),
});

export default function Contact() {
	const [message, setMessage] = useState<string>("");
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			await sendMail({
				name: data.name,
				email: data.email,
				subject: data.subject,
				message: data.message,
			});
			setMessage("お問い合わせを受け付けました。");
		} catch (error) {
			setMessage("送信に失敗しました。");
			console.error(error);
		}
	};

	useEffect(() => {
		if (message) alert(message);
	}, [message]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="flex-grow py-6 bg-gray-50"
		>
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold mb-8">お問い合わせフォーム</h1>

				<div className="bg-white rounded-lg shadow-sm p-8">
					<section className="border-b pb-6 mb-6">
						<p className="text-gray-600 leading-relaxed">
							下記フォームにご入力ください。
							<br />※
							ご記入漏れがある場合、お問い合わせにお答えできない場合がございます。
						</p>
					</section>

					<div className="text-center my-8">
						{message && <p className="text-sm text-gray-600 mb-4">{message}</p>}
					</div>

					<div className="mx-auto max-w-[480px]">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-4">
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									お名前
								</label>
								<input
									type="text"
									id="name"
									{...register("name")}
									className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									placeholder="山田 太郎"
								/>
								{errors.name && (
									<p className="mt-1 sm:text-sm text-red-500">
										{errors.name.message}
									</p>
								)}
							</div>

							<div className="mb-4">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									メールアドレス
								</label>
								<input
									type="email"
									id="email"
									{...register("email")}
									className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									placeholder="test@example.com"
								/>
								{errors.email && (
									<p className="mt-1 sm:text-sm text-red-500">
										{errors.email.message}
									</p>
								)}
							</div>

							<div className="mb-4">
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-700"
								>
									件名
								</label>
								<input
									type="text"
									id="subject"
									{...register("subject")}
									className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
								{errors.subject && (
									<p className="mt-1 sm:text-sm text-red-500">
										{errors.subject.message}
									</p>
								)}
							</div>

							<div className="mb-8">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									お問い合わせ内容
								</label>
								<textarea
									id="message"
									{...register("message")}
									className="min-h-[240px] mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								/>
								{errors.message && (
									<p className="mt-1 sm:text-sm text-red-500">
										{errors.message.message}
									</p>
								)}
							</div>

							<div className="mb-4 mt-8">
								<button
									type="submit"
									className="relative w-[280px] mx-auto md:ml-auto p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold flex justify-between items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
								>
									{isSubmitting && <LoaderCircle className="animate-spin" />}
									<span className="flex-1 text-center pl-4">送信</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
