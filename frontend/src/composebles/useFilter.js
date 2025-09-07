import { ref, computed } from 'vue'

const status = ref('DESAPARECIDO')

const updateStatus = (sts) => {
	status.value = sts
}

const statusName = computed(() => {
	return status.value === 'DESAPARECIDO' ? 'Desaparecidas' : 'Encontradas'
})

const nameGenerous = ref('MASCULINO')
const statusGenerous = (stsGen) => {
	return (nameGenerous.value = stsGen)
}

const generousSelectName = 'Pessoas' // Verificar depois para alterar o nome de acordo com o Genero selecionado

export function useGetStatus() {
	return { status, statusName, nameGenerous, generousSelectName, statusGenerous, updateStatus }
}
