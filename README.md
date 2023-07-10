
# Desafio Tecnico Fullstack Tinnova

Desafio Técnico criado para o processo de candidatura para vaga de Desenvolvedor Fullstack pleno na empresa Tinnova utilizando NodeJS e React

### Desafio 

Foi pedido no desafio e resolução de 5 exercicios sendo eles

### 01- Calculo de pencentual de votos 
Eu deveria calcular o percentual de votos aonde eu tinha os seguintes valores 

 - total de eleitores = 1000
 - válidos = 800
 - brancos = 150
 - nulos = 50

 e deveria criar 3 classes que calculam 

 - pencentual de votos válidos
 - pencentual de votos brancos
 - pencentual de votos nulos

para testar esse exercicio você deve rodar o comando ```yarn votes``` no seu terminal estando dentro do repositório test-backend-tinnova.


### 02- Algoritmo de ordenação Bubble Sort 

Eu tinha o seguinte vetor ```v = {5, 3, 2, 4, 7, 1, 0, 6}```
e deveria organiza-lo em ordem crescente utilizando um algoritmo de bubble sort. Você pode testar esse exercicio utilizando o comando ```yarn bubble```no seu terminal estando dentro do repositório test-backend-tinnova.

### 03- Calculo de fatorial

Eu deveria criar um programa que calcule um fatorial de qualquer numero inserido. Fatorial é a multiplicação do numero n multiplicado por seus antecessores maiores ou iguais a 1. Você pode testar esse execicio executando ```yarn factorial```
no seu terminal estando dentro do repositório test-backend-tinnova.

### 04- Soma dos multiplos de 3 e 5

Eu deveria fazer uma implementação que faça a soma de todos os numeros de que sejam multiplos de 3 e 5 abaixo do numero X inserido na função. Você pode testar esse execicio executando ```yarn multiples```
no seu terminal estando dentro do repositório test-backend-tinnova.

### 05- Cadastro de veículos

Eu deveria criar uma aplicação backend utilizando NodeJS e JSON para realizar um CRUD de veículos, deveria ter um frontend em SPA que se comunique com esse backend. Eu utilizei as seguintes tecnologias para criar essa aplicação completa

- NodeJS
- Express
- Typescript
- Prisma
- Postgressql
- Docker
- Jest
- Vite
- Axios

### Como utilizar o projeto

Já tendo clonado esse repositório você precisará realizar os seguintes passos

- Baixar o Docker, se estiver utilizando MacOS pode somente instalar ele normalmente caso utilize o windows deve ter o WSL rodando na maquina. Para mais infos consulte a documentação do próprio Docker aqui: [Docker](https://docs.docker.com/?_gl=1*ttx43*_ga*NzY5NDE2MzIzLjE2ODg4NTc3MDE.*_ga_XJWPQMJYHQ*MTY4ODk0OTg2My4yLjEuMTY4ODk0OTg2Ni41Ny4wLjA.)

- Com o repositório aberto no vscode certifique-se de que seu terminal esta dentro do diretório test-backend-tinnova e rode um ```yarn``` para instalar as dependencias.

- No mesmo diretório e com o docker aberto na sua maquina execute o comando ```docker-compose up -d```para que ele inicie o banco de dados da aplicação, já deixei alguns dados gravados para que possam testar.

- Agora no diretório test-backend-tinnova pode executar o comando ```yarn dev```para iniciar a aplicação, o terminal deve exibir a mensagem: "ouvindo na porta 3001" correspondente a porta do localhost que configurei para o backend rodar.

- Com o backend já rodando podemos iniciar o frontend, navegando até o diretório frontend-tinnova que esta dentro do projeto utilizando no terminal do próprio vscode o comando cd frontend-tinnova e em seguida pode executar um yarn para instalar as dependencias do frontend. Após isso pode executar um yarn dev para iniciar o frontend, ele te informará a porta do localhost que ele esta iniciado no meu caso ele toda na porta :5174

- Feito isso a aplicação esta com seu backend e frontend rodando e você pode estar utilizando ela e testando. 

- Também foi criado um teste unitário que era pedido na descrição do desafio que validasse se o nome dos fabricantes estava sendo cadastrado corretamente. Você pode estar rodando ele a partir do diretório teste-backend-tinnova e rodando o comando ```yarn test```


