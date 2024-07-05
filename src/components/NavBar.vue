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

const route = useRoute();
</script>

<template>
	<nav>
		<ul
			v-if="route.name != 'index'"
			data-aos="fade-right"
			data-aos-duration="1000"
			class="flex items-center justify-between gap-6 transition-all duration-200 font-montserrat tracking-widest">
			<NavLink v-for="link in navLinks" :key="link.path" :link="link" />
		</ul>
	</nav>
</template>

<style lang="scss" scoped></style>
