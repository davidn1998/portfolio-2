<script lang="ts" setup>
defineProps({
	link: {
		type: Object as () => { label: string; path: string },
		required: true,
	},
});

const route = useRoute();
</script>

<template>
	<li
		class="dark:text-gray-300 dark:hover:text-gray-50 group relative transition-all duration-200 text-xs md:text-sm">
		<NuxtLink
			:to="link.path"
			:target="link.label === 'resume' ? '_blank' : '_self'"
			>{{ link.label }}</NuxtLink
		>
		<span
			class="absolute top-6 left-0 h-[2px] w-full bg-gray-500 transition-all duration-300 ease-in-out content-[''] group-hover:scale-x-100 dark:bg-gray-50"
			:class="route.path === link.path ? 'scale-x-100' : 'scale-x-0'" />
	</li>
</template>

<style lang="scss" scoped></style>
