import Link from "next/link";
import { Music, Radio, User } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Header() {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<main className="flex-1">
					{/* (we'll replace this image later) */}
					{/* 
						eslint-disable-next-line @next/next/no-img-element 
					*/ }
					<img src="https://files.catbox.moe/c7ofe2.png" alt="placeholder logo" className="rounded-md max-h-72 mx-auto" />
					<section className="w-full py-12 md:py-12 lg:py-24 xl:py-32">
						<div className="container px-4 md:px-6">
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
										Discover Your Perfect Sound
									</h1>
									<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
										Musaic uses AI to understand your taste and introduce you
										to new artists and tracks you'll love.
									</p>
								</div>
								<div className="space-x-4">
									<Link
										href="#"
										className={buttonVariants({ variant: "default" })}
									>
										Get Started
									</Link>
									<Link
										href="#"
										className={buttonVariants({ variant: "outline" })}
									>
										Learn More
									</Link>
								</div>
							</div>
						</div>
					</section>
					<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 rounded-xl border-2 shadow-md">
						<div className="container px-4 md:px-6">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
								Features
							</h2>
							<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
								<div className="flex flex-col items-center space-y-3 text-center">
									<Music className="h-12 w-12 text-primary" />
									<h3 className="text-xl font-bold">Personalized Playlists</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Curated playlists based on your listening history and
										preferences.
									</p>
								</div>
								<div className="flex flex-col items-center space-y-3 text-center">
									<User className="h-12 w-12 text-primary" />
									<h3 className="text-xl font-bold">Social Sharing</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Connect with friends and share your favorite tracks and
										artists.
									</p>
								</div>
								<div className="flex flex-col items-center space-y-3 text-center">
									<Radio className="h-12 w-12 text-primary" />
									<h3 className="text-xl font-bold">A Secret Third Thing</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Todo: fill this in later :)
									</p>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}
