<script lang="ts" setup>
import appDevAnim from '@/lotties/app-dev.json';

const tab = ref('portfolio');

const setTab = (t: string) => {
	tab.value = t;
};
</script>

<template>
	<div class="flex flex-1 flex-col mt-32">
		<Meta title="David Nwachukwu" />
		<section id="hero" class="mb-14 flex flex-col items-center md:flex-row">
			<div
				class="mr-4 flex flex-col items-center justify-center text-center md:items-start md:text-start gap-4">
				<h1 class="text-4xl font-bold mb-4">David Nwachukwu</h1>
				<p>
					Hi ✌🏾, I'm a
					<span class="font-bold text-purple-400">full stack</span>
					software engineer with a passion for
					<span class="font-bold text-purple-400">
						web development</span
					>.
				</p>
				<p>
					I'm proficient in Python, JavaScript, TypeScript and modern
					web tools 💻. Currently my tech stack consists of NextJS,
					TailwindCSS & MongoDB.
				</p>
				<div id="socials" class="mt-5 flex w-24 justify-between">
					<a
						href="https://github.com/davidn1998"
						target="_blank"
						rel="noreferrer">
						<Icon
							name="uil:github"
							class="w-8 h-8 transition-all duration-200 ease-linear hover:cursor-pointer hover:text-purple-400" />
					</a>
					<a
						href="https://www.linkedin.com/in/david-nwachukwu-a4449a15a/"
						target="_blank"
						rel="noreferrer">
						<Icon
							name="uil:linkedin"
							class="w-8 h-8 transition-all duration-200 ease-linear hover:cursor-pointer hover:text-purple-400" />
					</a>
				</div>
			</div>
			<div>
				<client-only>
					<Vue3Lottie :animation-data="appDevAnim" />
				</client-only>
			</div>
		</section>
		<div
			class="mb-6 flex border-b-2 border-gray-500 pb-2 text-lg font-bold dark:border-gray-50">
			<div class="flex text-gray-700 dark:text-gray-400">
				<button
					class="mr-8 cursor-pointer rounded-xl p-2 transition-colors duration-300 hover:text-black dark:hover:text-white"
					:class="
						tab === 'portfolio' ? 'text-black dark:text-white' : ''
					"
					@click="() => setTab('portfolio')">
					<h3>Portfolio</h3>
				</button>
				<button
					class="mr-8 cursor-pointer rounded-xl p-2 transition-colors duration-300 hover:text-black dark:hover:text-white"
					:class="
						tab === 'skills' ? 'text-black dark:text-white' : ''
					"
					@click="() => setTab('skills')">
					<h3>Skills</h3>
				</button>
			</div>
		</div>
		<section class="flex">
			<PortfolioSection v-if="tab === 'portfolio'" />
			<SkillsSection v-else-if="tab === 'skills'" />
		</section>
	</div>
</template>

<style lang="scss" scoped></style>
