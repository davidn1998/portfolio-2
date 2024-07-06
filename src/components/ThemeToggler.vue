<script lang="ts" setup>
const colorMode = useColorMode();

const toggleTheme = () => {
	colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const buttonLabel = computed(() => {
	return colorMode.value === 'dark'
		? 'Switch to light mode'
		: 'Switch to dark mode';
});
</script>

<template>
	<button
		class="flex justify-center items-center cursor-pointer rounded-xl border-2 border-transparent bg-neutral-300 p-2 text-lg transition-all duration-100 ease-linear hover:border-neutral-400 dark:bg-neutral-600 dark:text-white"
		:aria-label="buttonLabel"
		@click="toggleTheme">
		<Icon v-if="colorMode.value === 'dark'" name="uil:sun" />
		<Icon v-else name="uil:moon" />
	</button>
</template>

<style lang="scss" scoped></style>
