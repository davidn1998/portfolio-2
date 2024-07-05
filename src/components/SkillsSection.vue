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
];
</script>

<template>
	<div class="flex w-full flex-wrap justify-center">
		<SkillIcon v-for="skill in skills" :key="skill.name" v-bind="skill" />
	</div>
</template>

<style lang="scss" scoped></style>
