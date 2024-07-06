<script lang="ts" setup>
useHead({
	title: 'David Nwachukwu | Portfolio',
	meta: [
		{
			name: 'description',
			content:
				'A full stack software engineer with a passion for web development while specialising in frontend.',
		},
	],
	link: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico',
		},
	],
	htmlAttrs: {
		lang: 'en',
	},
});
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
