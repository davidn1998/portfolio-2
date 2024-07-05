<script lang="ts" setup>
import floatingLaptopAnim from '@/lotties/floating-laptop.json';

useHead({
	title: 'Contact | David Nwachukwu',
	meta: [
		{
			name: 'description',
			content:
				'Contact me for job opportunities or just to connect. LinkedIn, Email and Github.',
		},
	],
});
</script>

<template>
	<section class="mb-14 flex flex-col items-center md:flex-row">
		<div data-aos="fade-right" data-aos-duration="1000">
			<client-only>
				<Vue3Lottie :animation-data="floatingLaptopAnim" />
			</client-only>
		</div>
		<div
			data-aos="fade-left"
			data-aos-duration="1000"
			class="mr-4 flex flex-col items-center justify-center text-center md:items-start md:text-start gap-4">
			<h1 class="text-4xl mb-4 font-montserrat tracking-widest">
				Contact
			</h1>
			<p class="font-light">
				If you have any job opportunities or just want to connect, then
				feel free to get in touch using any of the methods below. 👇
			</p>
			<div id="socials" class="mt-5 flex flex-col gap-4 justify-between">
				<a
					href="https://www.linkedin.com/in/david-nwachukwu-a4449a15a/"
					target="_blank"
					rel="noreferrer"
					class="flex gap-4 items-center transition-all duration-200 ease-linear hover:cursor-pointer hover:text-purple-400">
					<Icon name="uil:linkedin" class="w-8 h-8" />
					<p>LinkedIn</p>
				</a>
				<a
					href="mailto:davidnw1998@gmail.com"
					class="flex gap-4 items-center transition-all duration-200 ease-linear hover:cursor-pointer hover:text-purple-400">
					<Icon name="uil:envelope" class="w-8 h-8" />
					<p>Email</p>
				</a>
				<a
					href="https://github.com/davidn1998"
					target="_blank"
					rel="noreferrer"
					class="flex gap-4 items-center transition-all duration-200 ease-linear hover:cursor-pointer hover:text-purple-400">
					<Icon name="uil:github" class="w-8 h-8" />
					<p>Github</p>
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped></style>
