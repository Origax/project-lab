# Aqui estamos pegando a imagem instalada | Conselho do professor é usar sempre uma imagem instalada pois é mais rápido.
FROM node:22.18.0
# Selecionando a pasta dentro do container | Pasta criada virtualmente no Container
WORKDIR /app
# Copiando as depedências do projeto | Colocar as depedências e depois inclui-las com ./
# Copiamos todas as dependências e enviamos
COPY package.json package-lock.json ./
# npm i | Comando para instalar as depedências
RUN npm i
# . para . | Significa copiar tudo de externo para interno
# . é CTRL + A, pegamos tudo e mandamos tudo
# Sempre o ultimo COPY fica exclusivo para os arquivos restantes.
COPY . .
# Porta exposta | Porta externa
EXPOSE 5173
# Esse aqui não sabemos | Só precisa.
CMD ["npm","run","dev"] 