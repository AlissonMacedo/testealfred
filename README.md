<h1 align="center">Ecommerce Alfred</h1>

# Descrição.

- Esta é uma simples aplicação ecommerce, com uma lista de produtos e um carrinho.

- Esta aplicação lista produtos de uma api local.

- Nesta aplicação foram aplicados os novos Hooks do react, juntamente com Redux, saga.

# O que ela faz?

- É possivel adicionar produtos ao carrinho;
- No carrinho é possivel adicionar mais items do mesmo produto;
- É possivel atualizar a pagina ou reiniciar o servidor ser perder a lista de compras.

# 💻 Demonstração

- Listando os produtos da api;

<p align="center">
<img src="./demo/demo1.gif" alt="demo1" title="demo1">
</p>

- Listando os produtos adicionados ao carrinho de compras;

<p align="center">
<img src="./demo/demo2.gif" alt="demo2" title="demo2">
</p>

- Tratativa para erro de conexão e lista vazia de produtos;

<p align="center">
<img src="./demo/demo3.gif" alt="demo3" title="demo3">
</p>

## 🎩 Como fazer funcionar

- Clone o projeto com o git clone

```sh
git clone https://github.com/AlissonMacedo/testealfred.git
```

- Acesse a pasta local
- Instale as dependencias com yarn

- Rode este comando para rodar o json server

```sh
json-server server.json -p 3333
```

- Em um novo terminal rode este comando para iniciar o servidor

```sh
yarn start
```

- Automaticamente deve-se abrir o navegador com o projeto.

* Caso não ocorra, digite o endereço abaixo no navegador para acessar o projeto.

```sh
http://localhost:3000/
```
