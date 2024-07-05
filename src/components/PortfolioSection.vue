<script lang="ts" setup>
const projects = [
	{
		name: 'Filmdek',
		description:
			"A web app built with Next.js for generating and collecting movie trading cards. Incorporating a retro design inspired by 90's CRT televisions, experience the nostalgia of long beloved movies in this TCG for film lovers!",
		githubURL: 'https://github.com/davidn1998/filmdek',
		websiteURL: 'https://filmdek.com/',
		cleanURL: 'filmdek.com',
		imgURL: '/img/project_thumbnails/filmdek_thumb.png',
		techIcons: [
			{ name: 'Next.js', icon: 'simple-icons:nextdotjs' },
			{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
			{ name: 'TypeScript', icon: 'simple-icons:typescript' },
			{ name: 'Framer Motion', icon: 'simple-icons:framer' },
			{ name: 'Netlify', icon: 'simple-icons:netlify' },
			{ name: 'TMDB API', icon: 'dashicons:rest-api' },
		],
	},
	{
		name: 'Charcutify',
		description:
			'A web app built with Next.js for creating, customising and visualising custom charcuterie boards. You can also browse premade boards.',
		githubURL: 'https://github.com/davidn1998/charcutify',
		websiteURL: 'https://zesty-sherbet-2779be.netlify.app/',
		cleanURL: 'charcutify.netlify.app',
		imgURL: '/img/project_thumbnails/charcutify_thumb.png',
		techIcons: [
			{ name: 'Next.js', icon: 'simple-icons:nextdotjs' },
			{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
			{ name: 'TypeScript', icon: 'simple-icons:typescript' },
			{ name: 'Netlify', icon: 'simple-icons:netlify' },
		],
	},
	{
		name: 'Ludumlib',
		description:
			'A web app that allows people to discover video games, track the games they have played, view their gaming habits through a personal analytics dashboard and more. Built with Next.js on the frontend, Node.js and Express.js for the backend with a MongoDB database. Authentication was built with Firebase.',
		githubURL: 'https://github.com/davidn1998/ludumlib',
		websiteURL: 'https://ludumlib.vercel.app/',
		cleanURL: 'ludumlib.vercel.app',
		imgURL: '/img/project_thumbnails/ludumlib_thumb.png',
		techIcons: [
			{ name: 'Next.js', icon: 'simple-icons:nextdotjs' },
			{ name: 'SASS', icon: 'simple-icons:sass' },
			{ name: 'MongoDB', icon: 'simple-icons:mongodb' },
			{ name: 'Firebase', icon: 'mdi:firebase' },
			{ name: 'Vercel', icon: 'simple-icons:vercel' },
			{ name: 'RAWG API', icon: 'dashicons:rest-api' },
		],
	},
];
</script>

<template>
	<div className="flex flex-1 flex-col">
		<p className="mb-4 font-montserrat tracking-wider">
			Checkout some of my projects 📁 and concepts 🚀
		</p>
		<div className="flex flex-col">
			<ProjectCard
				v-for="(project, index) in projects"
				:key="index"
				:data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
				data-aos-duration="1000"
				:name="project.name"
				:description="project.description"
				:github-link="project.githubURL"
				:website-link="project.websiteURL"
				:clean-link="project.cleanURL"
				:img-link="project.imgURL"
				:tech-icons="project.techIcons"
				:reversed="index % 2 === 1" />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
