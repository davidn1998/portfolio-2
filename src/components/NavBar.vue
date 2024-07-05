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
		<Transition>
			<ul
				v-if="route.name != 'index'"
				class="flex items-center justify-between gap-6 transition-all duration-200 font-montserrat tracking-widest">
				<NavLink
					v-for="link in navLinks"
					:key="link.path"
					:link="link" />
			</ul>
		</Transition>
	</nav>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
	transition: all 0.5s;
}

.v-enter-from,
.v-leave-to {
	transform: translateX(-150%);
	opacity: 0;
}
</style>
