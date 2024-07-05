<script lang="ts" setup>
import appDevAnim from '@/lotties/app-dev.json';

const tabs = ['portfolio', 'skills'];

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
				<h1 class="text-4xl mb-4 font-montserrat tracking-widest">
					David Nwachukwu
				</h1>
				<p class="font-light">
					Hi ✌🏾, I'm a
					<span class="font-semibold text-purple-400"
						>full stack</span
					>
					software engineer with a passion for
					<span class="font-semibold text-purple-400">
						web development</span
					>.
				</p>
				<p class="font-light">
					I'm proficient in JavaScript, TypeScript, PHP, Python and
					modern web tools 💻. Currently my tech stack consists of
					Nuxt / Vue, TailwindCSS & MongoDB.
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
			class="mb-6 flex border-b-2 border-gray-500 pb-2 text-lg dark:border-gray-50">
			<div class="flex text-gray-700 dark:text-gray-400">
				<button
					v-for="(tabItem, index) in tabs"
					:key="index"
					class="mr-8 cursor-pointer rounded-xl p-2 transition-colors duration-300 hover:text-black dark:hover:text-white"
					:class="tab === tabItem ? 'text-black dark:text-white' : ''"
					@click="() => setTab(tabItem)">
					<h3 class="font-montserrat tracking-widest capitalize">
						{{ tabItem }}
					</h3>
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
