<script setup lang="ts">
import { module1Store } from '../store/module/index'
const store1 = module1Store()
</script>

<template>
	<div class="card">
		<h1>Vue3+TS+Vite</h1>
		<button type="button" @click="store1.increment()" style="background-color: pink">
			click me to add a lovely pig
		</button>

		<div>
			<i v-for="item in store1.count" :key="index">🐖</i>
		</div>
		<h4>total pigs :{{ store1.count }}</h4>
	</div>
</template>

<style scoped></style>
