<script setup lang="ts">
const codeLine1 = 'function hello() => {';
const codeLine2 = "console.log('Welcome to my portfolio!')";
const codeLine3 = '}';

const typeLine1 = ref('');
const typeLine2 = ref({ text: '', state: false });
const typeLine3 = ref({ text: '', state: false });

const typeEffect3 = () => {
	typeLine3.value.text += codeLine3.charAt(typeLine3.value.text.length);
};

const typeEffect2 = () => {
	if (typeLine2.value.text.length < codeLine2.length) {
		typeLine2.value.text += codeLine2.charAt(typeLine2.value.text.length);
		setTimeout(typeEffect2, 60);
	}
	if (
		typeLine2.value.text.length === codeLine2.length &&
		!typeLine3.value.state
	) {
		setTimeout(typeEffect3, 700);
		typeLine3.value.state = true;
	}
};

const typeEffect1 = () => {
	if (typeLine1.value.length < codeLine1.length) {
		typeLine1.value += codeLine1.charAt(typeLine1.value.length);
		setTimeout(typeEffect1, 100);
	}
	if (typeLine1.value.length === codeLine1.length && !typeLine2.value.state) {
		setTimeout(typeEffect2, 1000);
		typeLine2.value.state = true;
	}
};
typeEffect1();
</script>
<template>
	<code
		class="typingEffect text-xs md:text-sm flex flex-col bg-white rounded-md shadow-md">
		<div v-highlightjs="typeLine1">
			<code class="typingEffect__line1 javascript" />
		</div>
		<div v-highlightjs="typeLine2.text">
			<code class="typingEffect__line2 javascript" />
		</div>
		<div v-highlightjs="typeLine3.text">
			<code class="typingEffect__line3 javascript" />
		</div>
	</code>
</template>

<style scoped>
.hljs {
	background: none;
}

.typingEffect {
	display: flex;
	flex-direction: column;
}

.typingEffect__line2 {
	margin-left: 24px;
}

.typingEffect > div {
	padding: 10px;
}

.typingEffect code {
	padding: 0;
	background-color: inherit;
}

.typingEffect code {
	width: fit-content;
	height: fit-content;
	border-right: 2px solid transparent;
}

.typingEffect__line2 {
	margin-left: 24px;
}

.typingEffect__line1 {
	animation: blink 1s 3;
}

.typingEffect__line2 {
	animation: blink 1s 2s 4;
}

.typingEffect__line3 {
	animation: blink 1s 4s infinite;
}

@keyframes blink {
	0%,
	45% {
		border-color: transparent;
	}
	50%,
	100% {
		border-color: initial;
	}
}
</style>
