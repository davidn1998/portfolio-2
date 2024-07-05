<script lang="ts" setup>
const { name, url, icon } = defineProps<{
	name: string;
	url: string;
	icon: string;
}>();
</script>

<template>
	<a
		:href="url"
		target="_blank"
		rel="noreferrer"
		class="group relative m-4 mb-8 cursor-pointer transition-all duration-300 hover:animate-pulse hover:text-purple-400">
		<Icon :name="icon" class="w-28 h-28" />
		<span
			class="sidebar-tooltip absolute -bottom-6 left-1/2 -translate-x-1/2 w-full scale-0 text-center transition-all duration-300 group-hover:scale-100 group-hover:text-purple-400">
			{{ name }}
		</span>
	</a>
</template>

<style lang="scss" scoped></style>
