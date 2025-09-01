<script setup lang="ts"></script>

<template>
	<div id="filter-people" class="bg-gray-200 shadow-md">
		<div class="container mx-auto px-6 py-4">
			<div class="flex flex-row">
				<div class="input-name-people">
					<input
						type="search"
						placeholder="Nome"
						class="w-full p-2 border-2 border-solid border-gray-300 rounded"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#filter-people {
	z-index: -1;
}
</style>
