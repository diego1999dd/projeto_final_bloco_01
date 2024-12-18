# TechZone - Eletrônicos e Acessórios

TechZone é um sistema em TypeScript para gerenciamento de produtos eletrônicos e acessórios. Ele permite que o usuário cadastre, liste, atualize e remova produtos, além de realizar consultas por ID.

## Funcionalidades

1. **Cadastrar Produto**:
   - Permite o cadastro de produtos eletrônicos ou acessórios.
   - Campos necessários incluem ID, nome, tipo, preço, e atributos específicos para cada categoria.

2. **Listar Todos os Produtos**:
   - Exibe todos os produtos cadastrados no sistema.

3. **Consultar Produtos por ID**:
   - Busca e exibe as informações de um produto específico com base no seu ID.

4. **Atualizar Produto**:
   - Atualiza as informações de um produto existente. A identificação é feita pelo ID do produto.

5. **Deletar Produto**:
   - Remove um produto do sistema com base no seu ID.

6. **Sair**:
   - Finaliza o programa exibindo informações sobre o desenvolvedor.

## Estrutura do Projeto

O projeto segue uma arquitetura baseada em Model-Controller.

### Arquivos Principais:

- **`ProdutoController.ts`**:
  - Controla as operações principais do sistema, como cadastro, consulta, atualização e remoção de produtos.

- **`Acessorio.ts`**:
  - Define a classe `Acessorio` com atributos como tipo de acessório, cor, material e tamanho.

- **`Eletronico.ts`**:
  - Define a classe `Eletronico` com atributos como marca, modelo, garantia e voltagem.

- **`main.ts`**:
  - Função principal que implementa o menu interativo e as funcionalidades descritas acima.

## Requisitos para Execução

1. Node.js instalado (versão 14 ou superior).
2. TypeScript configurado no projeto.
3. Instale as dependências com:

   ```bash
   npm install readline-sync
   ```

## Como Executar

1. Clone o repositório e navegue até a pasta raiz do projeto.

2. Compile o TypeScript para JavaScript:

   ```bash
   tsc
   ```

3. Execute o programa:

   ```bash
   node dist/main.js
   ```

4. Navegue pelo menu interativo para utilizar as funcionalidades do sistema.

## Exemplos de Produtos

O sistema já possui exemplos de produtos cadastrados para teste:

1. **Eletrônicos**:
   - Smartphone Samsung Galaxy S23
   - Notebook Dell Inspiron 15

2. **Acessórios**:
   - Fone de Ouvido Bluetooth
   - Carregador USB-C para Notebook

## Desenvolvedor

- **Nome**: Diego Rodrigues do Nascimento
- **E-mail**: diegon@genstudents.org
- **GitHub**: [github.com/diego1999dd](https://github.com/diego1999dd)

---
TechZone - Tudo para seu mundo conectado! 💻
