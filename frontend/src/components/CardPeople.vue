<script setup lang="ts"></script>

<template>
	<div id="main-content" class="content-main">
		<div class="container mx-auto px-6 py-4 flex flex-col justify-between items-center">
			<div id="title-card-content" class="mb-6">
				<h1 class="text-3xl font-bold text-primary mx-auto">Opção 1</h1>
			</div>
			<div id="card-info" class="w-full">
				<div class="card-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					<div
						class="card-people flex flex-col bg-gray-100 rounded-b-2 mx-2 shadow-md rounded-lg relative"
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
						class="card-people feminino flex flex-col bg-gray-100 rounded-b-2 mx-2 shadow-md rounded-lg relative"
					>
						<div class="card-header p-2">
							<img
								class="img rounded-lg w-full h-full"
								src="https://static.vecteezy.com/ti/fotos-gratis/t1/26408779-mulher-movel-camera-casa-emocao-pessoa-selfie-blogueiro-telefone-smartphone-foto.jpg"
								alt="pessoa qualquer"
							/>
							<div class="card-flag">
								<span
									class="flag-info font-bold text-white text-xs absolute top-0 right-0 left-0 bottom-0 px-3 py-1"
								>
									Desaparecida
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 640"
									class="flag-icon"
								>
									<!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
									<path
										d="M224.5 160C224.5 147.1 232.3 135.4 244.3 130.4C256.3 125.4 270 128.2 279.1 137.4L439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C269.9 511.9 256.2 514.6 244.2 509.6C232.2 504.6 224.5 492.9 224.5 480L224.5 160z"
									/>
								</svg>
							</div>
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

.card-people {
	min-height: 400px;
	transition:
		transform 0.25s ease-out,
		filter 0.25s ease-out,
		opacity 0.25s ease-out,
		box-shadow 0.25s ease-out;
	/* will-change: transform, filter; */
}

.card-people::before {
	content: '';
	align-self: center;
	transition: all 0.4s ease-in-out;
	width: 0%;
	border-top: 3.5px solid transparent;
	border-radius: 10px;
	transform: scale(0.5);
}

/* Quando o mouse passa em um card */
.card-people:hover::before {
	width: 100%;
	border-color: var(--primary);
	transform: scale(1);
}

.card-people.feminino:hover::before {
	border-color: purple;
}

.card-people:hover {
	transform: scale(1.03);
}

.flag-info {
	top: 39%;
	left: auto;
	bottom: auto;
	background-color: red;
	color: var(--light);
	transform: translateX(6px);
}

.flag-icon {
	width: 20px;
	position: absolute;
	right: -12px;
	fill: rgb(184, 0, 0);
	bottom: 53%;
	z-index: -2;
}

@media (max-width: 992px) {
	.card-flag {
		transform: translate(8px, -17px);
	}

	.flag-info {
		top: auto;
		transform: translate(6px, -15px);
	}

	.flag-icon {
		bottom: unset;
	}
}
</style>
