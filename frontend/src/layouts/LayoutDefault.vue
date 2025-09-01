<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import CardPeople from '../components/CardPeople.vue'
import Filter from '../components/FilterPeople.vue'
</script>

<template>
	<Header />
	<main id="main-home">
		<Filter />
		<router-view />
		<CardPeople />
	</main>
	<Footer />
</template>
