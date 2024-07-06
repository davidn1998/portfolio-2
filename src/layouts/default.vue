<script lang="ts" setup>
import 'aos/dist/aos.css';

onMounted(() => {
	import('aos').then(({ default: AOS }) => {
		AOS.init();
	});
});

const route = useRoute();
</script>

<template>
	<div
		class="dark:bg-ink dark:text-white flex flex-col relative font-open overflow-x-hidden">
		<header
			class="fixed w-screen flex justify-between items-center p-8 z-50 drop-shadow-md"
			:class="
				route.name === 'index'
					? 'bg-transparent'
					: 'bg-gray-100 dark:bg-black '
			">
			<NavBar />
			<ClientOnly>
				<ThemeToggler />
			</ClientOnly>
		</header>
		<main
			class="container mx-auto flex flex-col lg:max-w-5xl min-h-screen justify-center p-4">
			<slot />
		</main>
		<TheFooter v-if="route.name !== 'index'" />
	</div>
</template>

<style lang="scss" scoped></style>
