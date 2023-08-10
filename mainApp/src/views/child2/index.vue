<template>
	<div>
		<micro-app name="vue3vite" url="http://localhost:8052/basename/" inline disableSandbox />
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const message = ref(0)
</script>

<style scoped></style>
