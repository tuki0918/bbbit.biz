"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
				<div className="snap-start" id="services">
					<Services />
				</div>
				<div className="snap-start" id="works">
					<Works />
				</div>
				<div className="snap-start" id="contact">
					<Contact />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Main;
