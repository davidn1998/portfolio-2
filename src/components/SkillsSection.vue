<script lang="ts" setup>
const skills = [
	{
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		icon: 'simple-icons:javascript',
	},
	{
		name: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
		icon: 'simple-icons:typescript',
	},
	{
		name: 'HTML5',
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		icon: 'simple-icons:html5',
	},
	{
		name: 'CSS3',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		icon: 'simple-icons:css3',
	},
	{
		name: 'Tailwind CSS',
		url: 'https://tailwindcss.com/',
		icon: 'simple-icons:tailwindcss',
	},
	{
		name: 'Vue 3',
		url: 'https://v3.vuejs.org/',
		icon: 'simple-icons:vuedotjs',
	},
	{
		name: 'Nuxt 3',
		url: 'https://v3.nuxtjs.org/',
		icon: 'simple-icons:nuxtdotjs',
	},
	{
		name: 'React',
		url: 'https://reactjs.org/',
		icon: 'simple-icons:react',
	},
	{
		name: 'Next.js',
		url: 'https://nextjs.org/',
		icon: 'simple-icons:nextdotjs',
	},
	{
		name: 'MongoDB',
		url: 'https://www.mongodb.com/',
		icon: 'simple-icons:mongodb',
	},
	{
		name: 'SQL',
		url: 'https://www.mysql.com/',
		icon: 'simple-icons:mysql',
	},
	{
		name: 'Node.js',
		url: 'https://nodejs.org/',
		icon: 'simple-icons:nodedotjs',
	},
	{
		name: 'SASS',
		url: 'https://sass-lang.com/',
		icon: 'simple-icons:sass',
	},
	{
		name: 'Figma',
		url: 'https://www.figma.com/',
		icon: 'simple-icons:figma',
	},
	{
		name: 'Git',
		url: 'https://git-scm.com/',
		icon: 'simple-icons:git',
	},
	{
		name: 'Python',
		url: 'https://www.python.org/',
		icon: 'simple-icons:python',
	},
	{
		name: 'PHP',
		url: 'https://www.php.net/',
		icon: 'simple-icons:php',
	},
];
</script>

<template>
	<div class="flex w-full flex-wrap justify-center items-center">
		<SkillIcon v-for="skill in skills" :key="skill.name" v-bind="skill" />
	</div>
</template>

<style lang="scss" scoped></style>
