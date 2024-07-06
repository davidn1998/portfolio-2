<script lang="ts" setup>
import workingDevAnim from '@/lotties/working-dev.json';
</script>

<template>
	<div
		data-aos="fade-in"
		data-aos-duration="1000"
		class="flex flex-col items-center justify-center mt-24">
		<div
			class="flex w-full gap-4 flex-col-reverse items-stretch justify-between rounded-2xl bg-gray-50 shadow-lg dark:bg-neutral-800 dark:shadow-black md:flex-row">
			<client-only>
				<div class="md:w-1/2">
					<Vue3Lottie :animation-data="workingDevAnim" />
				</div>
			</client-only>
			<div
				class="flex flex-col flex-1 w-full p-4 py-10 md:p-10 md:text-2xl">
				<h1
					class="text-4xl dark:text-white font-montserrat tracking-widest">
					David Nwachukwu
				</h1>
				<div class="h-0.5 bg-ink dark:bg-white my-4" />
				<ClientOnly>
					<CodeAnim />
				</ClientOnly>
			</div>
		</div>
		<div class="group mt-16 flex h-24 w-24 items-center justify-center">
			<NuxtLink
				to="/home"
				class="flex h-16 w-24 animate-bounce items-center justify-center rounded-3xl bg-purple-800 text-center tracking-widest shadow-md dark:shadow-black text-white">
				Enter
			</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
