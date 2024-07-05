<script lang="ts" setup>
import workingDevAnim from '@/lotties/working-dev.json';
</script>

<template>
	<div class="flex h-screen flex-col items-center md:justify-center">
		<div
			class="flex w-full flex-col-reverse items-center justify-between rounded-2xl bg-gray-50 shadow-lg dark:bg-neutral-800 dark:shadow-neutral-800 md:flex-row">
			<client-only>
				<Vue3Lottie :animation-data="workingDevAnim" />
			</client-only>
			<div
				class="w-full p-10 text-xl font-bold md:w-[50%] md:p-16 md:text-2xl">
				<h1 class="mb-4 text-4xl">David Nwachukwu</h1>
				<!-- <div class="{`${jetbrainsMono.variable}" font-mono`}>
					<span>&gt; I 💜</span> <span id="typeView"></span>
				</div> -->
			</div>
		</div>
		<div class="group mt-16 flex h-24 w-24 items-center justify-center">
			<Link
				href="/"
				class="flex h-16 w-24 animate-bounce-vertical items-center justify-center rounded-3xl bg-purple-400 text-center font-bold text-black shadow-md shadow-purple-400 dark:text-white">
				Enter
			</Link>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
