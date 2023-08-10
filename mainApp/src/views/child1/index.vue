<template>
	<div style="width: 500px; height: 500px">
		<micro-app name="child1app" url=" http://localhost:8051/" baseroute="/my-page"></micro-app>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const message = ref(0)
</script>

<style scoped></style>
