<script setup lang="ts"></script>

<template>
	<header class="bg-gray-100 shadow-md">
		<div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
			<!-- Logo -->
			<div class="flex items-center space-x-2 w-40">
				<img src="../images/logo.png" alt="" />
			</div>

			<!-- Navegação Desktop -->
			<nav class="hidden md:flex space-x-6">
				<a
					href="#"
					class="text-gray-600 border-b-2 border-transparent hover:text-blue-900 hover:border-blue-300 transition"
					>Início</a
				>
				<a
					href="#"
					class="text-gray-600 border-b-2 border-transparent hover:text-blue-900 hover:border-blue-300 transition"
					>Serviços</a
				>
				<a
					href="#"
					class="text-gray-600 border-b-2 border-transparent hover:text-blue-900 hover:border-blue-300 transition"
					>Sobre</a
				>
				<a
					href="#"
					class="text-gray-600 border-b-2 border-transparent hover:text-blue-900 hover:border-blue-300 transition"
					>Contato</a
				>
			</nav>

			<!-- Botão Call to Action -->
			<div class="text-right">
				<span class="text-primary font-bold px-4 py-2 text-xl"> Busca de Pessoas </span>
			</div>

			<!-- Menu Mobile -->

			<!-- Verificar se faz sentido manter o menu -->

			<!-- <div class="md:hidden">
				<button class="text-gray-700 focus:outline-none">
					-- Ícone de Burgui --
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div> -->
		</div>
	</header>
</template>

<style scoped>
/* 

scoped apenas para este arquivo 

*/
</style>
