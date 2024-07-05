<script lang="ts" setup>
import workingDevAnim from '@/lotties/working-dev.json';
</script>

<template>
	<div
		data-aos="fade-in"
		data-aos-duration="1000"
		class="flex flex-col items-center justify-center mt-24">
		<div
			class="flex w-full flex-col-reverse items-center justify-between rounded-2xl bg-gray-50 shadow-lg dark:bg-neutral-800 dark:shadow-neutral-800 md:flex-row">
			<client-only>
				<Vue3Lottie :animation-data="workingDevAnim" />
			</client-only>
			<div class="w-full p-10 md:w-[50%] md:p-16 md:text-2xl">
				<h1
					class="mb-4 text-4xl dark:text-white font-montserrat tracking-widest">
					David Nwachukwu
				</h1>
			</div>
		</div>
		<div class="group mt-16 flex h-24 w-24 items-center justify-center">
			<NuxtLink
				to="/home"
				class="flex h-16 w-24 animate-bounce items-center justify-center rounded-3xl bg-purple-400 text-center tracking-widest text-black shadow-md shadow-purple-400 dark:text-white">
				Enter
			</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
