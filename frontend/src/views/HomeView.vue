<script setup lang="ts"></script>

<template>
	<div id="main-content" class="content-main">
		<div class="container mx-auto px-6 py-4 flex flex-col justify-between items-center">
			<div id="title-card-content" class="mb-6">
				<h1 class="text-3xl font-bold text-primary mx-auto">Opção 2</h1>
			</div>
			<div id="card-info" class="w-full">
				<div class="card-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					<div
						class="card flex flex-col bg-gray-100 rounded-b-2 mx-2 shadow-md rounded-lg relative"
					>
						<div class="card-header p-2 relative">
							<img
								class="img rounded-lg w-full h-full"
								src="https://img.freepik.com/fotos-gratis/jovem-barbudo-com-camisa-listrada_273609-5677.jpg?semt=ais_hybrid&w=740&q=80"
								alt="pessoa qualquer"
							/>
						</div>
						<div class="card-body px-3 py-1">
							<div class="card-content-head">
								<h2 class="card-name font-bold uppercase">Lucas Origa de Jesus</h2>
							</div>
							<div class="card-content-body">
								<h3 class="card-age text-gray-700">
									19 anos, <span class="card-generous">Masculino</span>
								</h3>
							</div>
							<div class="card-content-footer flex flex-col">
								<span class="more-infos-date"
									><strong>Data: </strong>10/10/2000</span
								>
								<span class="more-infos-location"
									><strong>Local: </strong>Vegê</span
								>
							</div>
						</div>
						<div class="card-footer">
							<a href="" class="absolute top-0 right-0 left-0 bottom-0"
								><span class="hidden"></span
							></a>
						</div>
					</div>
					<div
						class="card feminino flex flex-col bg-gray-100 rounded-b-2 mx-2 shadow-md rounded-lg relative"
					>
						<div class="card-header p-2">
							<img
								class="img rounded-lg w-full h-full"
								src="https://static.vecteezy.com/ti/fotos-gratis/t1/26408779-mulher-movel-camera-casa-emocao-pessoa-selfie-blogueiro-telefone-smartphone-foto.jpg"
								alt="pessoa qualquer"
							/>
						</div>
						<div class="card-body px-3 py-1 relative">
							<div class="card-content-head">
								<h2 class="card-name font-bold uppercase">
									Any Beatriz Silva da Rocha
								</h2>
							</div>
							<div class="card-content-body my-1">
								<h3 class="card-age text-gray-700">
									20 anos, <span class="card-generous">Feminino</span>
								</h3>
							</div>
							<div class="card-content-footer flex flex-col my-1">
								<span class="more-infos-date"
									><strong>Data: </strong>10/10/2000</span
								>
								<span class="more-infos-location"
									><strong>Local: </strong>Vegê</span
								>
								<span class="more-infos-details"
									><strong>Detalhes: </strong>Tatuagem na testa</span
								>
							</div>
						</div>
						<div class="card-footer">
							<a href="" class="absolute top-0 right-0 left-0 bottom-0"
								><span class="hidden"></span
							></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
/* Base: todos os cards com transição suave */
.card {
	min-height: 400px;
	transition:
		transform 0.25s ease-out,
		filter 0.25s ease-out,
		opacity 0.25s ease-out,
		box-shadow 0.25s ease-out;
	/* will-change: transform, filter; */
}

/* Quando o mouse passa em um card */
.card:hover {
	transform: scale(1.03);
	box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
	transition:
		transform 0.32s cubic-bezier(0.22, 0.61, 0.36, 1),
		box-shadow 0.32s cubic-bezier(0.22, 0.61, 0.36, 1);
}

/* Apaga só os outros quando um card está em hover */
.card-content:has(.card:hover) .card:not(:hover) {
	box-shadow: 3px 3px 18px 5px gray;
	/* filter: blur(0.082rem); */
	filter: brightness(0.9); /* Ver se faz sentido manter esse filter de luz ou o de blur*/
	opacity: 0.8;
	transform: scale(0.97);
	transition:
		transform 0.3s ease,
		filter 0.3s ease,
		opacity 0.3s ease;
}
</style>
