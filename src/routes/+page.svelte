<script lang="ts">
	import Article from '../components/Article.svelte';
	import Divider from '../components/Divider.svelte';
	import IconButton from '../components/IconButton.svelte';
	import Github from 'lucide-svelte/dist/svelte/icons/github.svelte';
	import Linkedin from 'lucide-svelte/dist/svelte/icons/linkedin.svelte';
	import Mail from 'lucide-svelte/dist/svelte/icons/mail.svelte';
</script>

<main class="max-w-5xl mx-auto space-y-12 px-8 sm:px-16 md:px-32 xl:px-0">
	<div class="flex flex-col xl:flex-row justify-between">
		<div class="max-w-2xl space-y-9 order-2 xl:order-1">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-800">
				Full stack developer and UI/UX designer.
			</h1>
			<p>
				Hey, I&apos;m Troy. I&apos;m a software developer at HSD Metrics where I work on software to
				help companies retain talent.
			</p>
			<p>
				I&apos;m a full stack developer with a passion for learning, and an obsession with the user
				experience.
			</p>
			<div class="flex gap-4">
				<IconButton href="https://github.com/troykollar" ariaLabel="GitHub">
					<Github />
				</IconButton>
				<IconButton href="https://www.linkedin.com/in/troy-kollar/" ariaLabel="LinkedIn">
					<Linkedin />
				</IconButton>
				<IconButton href="mailto:troykollar@gmail.com" ariaLabel="Email">
					<Mail />
				</IconButton>
			</div>
		</div>
		<div class="flex justify-center pb-8 xl:order-1 min-w-44">
			<img
				src="https://media.licdn.com/dms/image/C5603AQHtjIEQ0IlXCw/profile-displayphoto-shrink_800_800/0/1634390956126?e=1688601600&v=beta&t=g51gfAnhaYUWMC-thNdvfNAsgrprs0iAhVUPuCIV3o8"
				alt="My beautiful face"
				class="w-44 h-44 xl:w-60 xl:h-60 rounded-full order-1"
			/>
		</div>
	</div>
	<Divider />
	<div class="flex flex-col lg:flex-row gap-12">
		<div class="space-y-6 flex-1">
			<h2 class="text-2xl leading-8 font-bold text-gray-800">Work</h2>
			<Article title="HSD Metrics, Jan 2022 - Present">
				At HSD Metrics, I work with leadership to plan, design, and develop full stack web
				applications that our clients use to gather and analyze data to improve employee engagement
				and retention.
			</Article>
			<Article title="Darko Inc, Aug 2020 - Dec 2021">
				During my time at Darko, I worked directly with clients to help create end-to-end in-store
				solutions. I was responsible for designing and developing the electrical hardware, firmware,
				and software to power their desired in-store experience.
			</Article>
		</div>
		<Divider class="lg:hidden" />
		<div class="flex flex-col gap-6 flex-1">
			<h2 class="text-2xl leading-8 font-bold text-gray-800">Projects</h2>
			<Article title="Next.js Wordle Clone">
				A clone of the popular game "Wordle". I built this because it seemed like a fun project to
				take on that could be completed in a relatively short amount of time, not to mention I love
				playing the Wordle every day!
			</Article>
			<Article title="This website!">
				This site is built using SvelteKit, TailwindCSS, and hosted on Github pages.
			</Article>
		</div>
	</div>
	<Divider />
</main>
