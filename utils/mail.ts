import nodemailer from "nodemailer";

const host = process.env.MAIL_SERVER_HOST;
const port = Number(process.env.MAIL_SERVER_PORT);
const secure = process.env.MAIL_SERVER_SECURE === "true";
const auth = {
	user: process.env.MAIL_SERVER_AUTH_USER,
	pass: process.env.MAIL_SERVER_AUTH_PASS,
};

export const transporter = nodemailer.createTransport({
	host,
	port,
	secure,
	auth,
});
