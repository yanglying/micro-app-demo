<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
	<div>
		<img src="./assets/pig.jpg" alt="" />
	</div>
	<HelloWorld msg="Vite + Vue3 + TS" />
	<button><router-link to="/page1">to page1</router-link></button>
	<button><router-link to="/page2">to page2</router-link></button>
	<div class="main">
		<router-view></router-view>
	</div>
</template>

<style scoped></style>
