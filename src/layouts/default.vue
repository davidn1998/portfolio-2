<script lang="ts" setup></script>

<template>
	<div class="dark:bg-ink flex flex-col relative">
		<header class="fixed w-screen flex justify-between items-center p-4">
			<NavBar />
			<ThemeToggler />
		</header>
		<main
			class="container mx-auto flex flex-col lg:max-w-5xl min-h-screen justify-center">
			<slot />
		</main>
	</div>
</template>

<style lang="scss" scoped></style>
