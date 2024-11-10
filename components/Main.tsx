"use client";

import Business from "@/components/Business";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import type { FC } from "react";

const Main: FC = () => {
	return (
		<>
			<Header />
			<main className="snap-y snap-mandatory h-screen overflow-y-scroll">
				<div className="snap-start" id="top">
					<Hero />
				</div>
				<div className="snap-start" id="business">
					<Business />
				</div>
				<div className="snap-start" id="works">
					<Works />
				</div>
				<div className="snap-start" id="footer">
					<Footer />
				</div>
			</main>
		</>
	);
};

export default Main;
