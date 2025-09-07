<script setup lang="ts">
import { ref } from 'vue'

const isModalOpen = ref(false)

const infoText = ref('')
const infoDate = ref('')
const infoImage = ref<File | null>(null)

const openModal = () => {
	isModalOpen.value = true
}
const closeModal = () => {
	isModalOpen.value = false
}

const handleImageUpload = (event: Event) => {
	const target = event.target as HTMLInputElement
	if (target.files && target.files.length > 0) {
		infoImage.value = target.files[0]
	}
}

const submitForm = () => {
	console.log('Texto:', infoText.value)
	console.log('Data:', infoDate.value)
	console.log('Imagem:', infoImage.value)
	closeModal()
}
</script>

<template>
	<button @click="openModal" class="bg-blue-600 text-white px-4 py-2 rounded">Abrir Modal</button>

	<div
		v-if="isModalOpen"
		class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
		@click.self="closeModal"
	>
		<div class="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative flex flex-col gap-4">
			<button
				@click="closeModal"
				class="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-lg"
			>
				×
			</button>

			<h2 class="text-xl font-bold text-center">Informações do Desaparecimento</h2>

			<div class="flex flex-col gap-3">
				<label class="font-semibold">Informação:</label>
				<input
					type="text"
					v-model="infoText"
					placeholder="Digite alguma informação"
					class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<label class="font-semibold">Data:</label>
				<input
					type="date"
					v-model="infoDate"
					class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				<label class="font-semibold">Imagem:</label>
				<input
					type="file"
					@change="handleImageUpload"
					accept="image/*"
					class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			<button
				@click="submitForm"
				class="bg-green-600 text-white font-bold rounded px-4 py-2 hover:bg-green-700 mt-2"
			>
				Salvar
			</button>
		</div>
	</div>
</template>
