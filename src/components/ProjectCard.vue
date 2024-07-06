<script lang="ts" setup>
const {
	description,
	githubLink,
	imgLink,
	name,
	reversed,
	techIcons,
	websiteLink,
	cleanLink,
} = defineProps<{
	description: string;
	githubLink: string;
	imgLink: string;
	name: string;
	reversed: boolean;
	techIcons: { icon: string; name: string }[];
	websiteLink: string;
	cleanLink: string;
}>();
</script>

<template>
	<div
		class="relative flex"
		:class="reversed ? 'flex-row-reverse' : 'flex-row'">
		<a
			:href="websiteLink"
			target="_blank"
			rel="noreferrer"
			class="absolute h-full lg:relative w-full lg:w-2/3 flex">
			<NuxtImg
				:src="imgLink"
				alt="project"
				width="662"
				height="415"
				format="webp"
				quality="80"
				class="object-cover w-full h-full opacity-10 shadow-xl grayscale filter transition-all duration-300 lg:opacity-100 lg:hover:filter-none" />
		</a>
		<div
			class="lg:absolute flex flex-col justify-center p-8 lg:w-1/2 lg:p-0"
			:class="reversed ? 'left-0 lg:text-left' : 'right-0 lg:text-right'">
			<h3 class="text-xl font-montserrat tracking-widest">{{ name }}</h3>
			<div
				class="my-8 text-neutral-900 shadow-none dark:text-neutral-300 lg:bg-purple-800 lg:p-8 lg:text-white lg:shadow-2xl">
				<p class="mb-8 text-sm leading-5">{{ description }}</p>
				<ul
					class="flex text-2xl flex-wrap gap-4 lg:gap-8 mb-2"
					:class="reversed ? 'lg:justify-start' : 'lg:justify-end'">
					<li
						v-for="(icon, index) in techIcons"
						:key="index"
						class="group relative cursor-pointer">
						<Icon :name="icon.icon" />
						<span
							class="absolute left-1/2 top-8 w-auto min-w-max origin-top -translate-x-1/2 scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-300 group-hover:scale-100">
							{{ icon.name }}
						</span>
					</li>
				</ul>
			</div>
			<div
				class="flex items-center"
				:class="reversed ? 'lg:justify-start' : 'lg:justify-end'">
				<a
					v-if="githubLink"
					:href="githubLink"
					target="_blank"
					rel="noreferrer"
					class="flex items-center">
					<Icon
						name="uil:github-alt"
						class="text-xl transition-all hover:text-purple-800 dark:hover:text-purple-400" />
				</a>
				<a
					class="group ml-4 transform transition-all duration-300 ease-linear hover:text-purple-800 dark:hover:text-purple-400"
					:href="websiteLink"
					target="_blank"
					rel="noreferrer">
					<span class="mr-2 font-montserrat tracking-wider text-sm">{{
						cleanLink
					}}</span>
					<span
						class="inline-block transition-transform duration-300 ease-linear group-hover:translate-x-1">
						&rarr;
					</span>
				</a>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
