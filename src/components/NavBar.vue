<script lang="ts" setup>
type NavLink = {
	label: string;
	path: string;
};

const navLinks: NavLink[] = [
	{ label: 'home', path: '/home' },
	{ label: 'contact', path: '/contact' },
	{ label: 'resume', path: '/CV.pdf' },
];
</script>

<template>
	<nav>
		<ul
			class="flex h-12 items-center justify-between dark:text-gray-300 gap-3">
			<li v-for="link in navLinks" :key="link.path">
				<NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped></style>
