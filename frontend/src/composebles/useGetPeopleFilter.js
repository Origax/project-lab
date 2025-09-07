import { ref } from 'vue'
import { url } from '../constants/endPoint'

const data = ref([])

export function useGetPeopleFilter() {
	const getPeoples = async (params) => {
		const withParams = `${url}v1/pessoas/aberto/filtro?${params}`

		const reponse = await fetch(withParams, {
			method: 'GET',
			headers: {
				accept: '*/*',
			},
		})

		let res = await reponse.json()

		data.value = res.content
		return res
	}

	const clearData = () => {
		data.value = []
	}

	return { data, getPeoples, clearData }
}
