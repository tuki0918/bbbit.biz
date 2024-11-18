declare module "process" {
	global {
		namespace NodeJS {
			interface ProcessEnv {
				[key: string]: string | undefined;
				/** Mail server for receiving inquiries */
				readonly MAIL_SERVER_HOST: string;
				readonly MAIL_SERVER_PORT: string;
				readonly MAIL_SERVER_AUTH_USER: string;
				readonly MAIL_SERVER_AUTH_PASS: string;
				readonly MAIL_SERVER_TO: string;
				readonly MAIL_SERVER_SECURE: string;
			}
		}
	}
}
