<script setup lang="ts">
import { Button } from 'ant-design-vue'
</script>

<template>
	<button><router-link to="/page1">to page1</router-link></button>
	<button><router-link to="/page2">to page2</router-link></button>
	<button><router-link to="/child1">to child1-page1</router-link></button>
	<button><router-link to="/child2">to child2</router-link></button>
	<!-- <button><router-link to="/child1/page2">to child1-page2</router-link></button> -->
	<div class="main">
		<router-view></router-view>
	</div>
</template>

<style scoped></style>
