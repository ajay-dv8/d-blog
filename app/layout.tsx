import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav/navbar";
import { Toaster } from "@/components/ui/toaster";
import SessionProvider from "@/components/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: {
		template: "%s | Dives Blog",
		default: "Dives Blog",
	},
	authors: {
		name: "ajayDives",
	},

	description:
		"Explore captivating campus news, notice, stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
	openGraph: {
		title: "Dives Blog",
		description:
			"Explore captivating campus news, notice, stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
		url: "http://localhost:3000/",
		siteName: "Dives Blog",
		images: "/og.png",
		type: "website",
	},
	keywords: ["COMPSSA", "ajayDives", "KTU", "blog", "koforidua"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn("antialiased dark:bg-[#09090B] light:bg-[#09090B]", inter.className)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="max-w-7xl mx-auto lg:py-10 space-y-10 p-5 lg:p-0">
						<Navbar />
						{children}
					</main>
				</ThemeProvider>
				<Toaster />
				<SessionProvider />
			</body>
		</html>
	);


	//light
}
