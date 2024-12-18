# 💻 TechZone - Sistema de Gerenciamento de Produtos

Bem-vindo ao **TechZone**, um sistema simples para gerenciamento de produtos eletrônicos e acessórios. Este projeto permite cadastrar, listar, consultar, atualizar e excluir produtos, com um menu interativo para facilitar a navegação.

---

## 🛠️ Funcionalidades

1. **📝 Cadastrar Produto**
   - Adicione novos produtos, escolhendo entre eletrônicos e acessórios.
2. **📋 Listar Produtos**
   - Veja todos os produtos cadastrados no sistema.
3. **🔎 Consultar Produto por ID**
   - Pesquise produtos específicos utilizando o ID.
4. **✏️ Atualizar Produto**
   - Altere as informações de um produto já cadastrado.
5. **🗑️ Deletar Produto**
   - Remova produtos do sistema com base no ID.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **readline-sync**: Biblioteca para entrada de dados pelo terminal.

---

## 📂 Estrutura do Projeto

```
├── src
│   ├── controller
│   │   └── ProdutoController.ts
│   ├── model
│   │   ├── Acessorio.ts
│   │   └── Eletronico.ts
├── main.ts
```

- **Controller**: Gerencia as operações nos produtos.
- **Model**: Define as classes para "Eletrônicos" e "Acessórios".
- **main.ts**: Contém a lógica principal e o menu interativo.

---

## 🖥️ Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/diego1999dd/techzone.git
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o programa**:
   ```bash
   npx ts-node main.ts
   ```

---

## 👤 Autor

Projeto desenvolvido por **Diego Rodrigues do Nascimento**. 

- 📧 Email: diegon@genstudents.org  
- 🌐 GitHub: [github.com/diego1999dd](https://github.com/diego1999dd)

---

## 📝 Notas

- Certifique-se de ter o Node.js e o TypeScript instalados.
- O programa utiliza um ID gerado automaticamente para os produtos.
- No menu interativo, pressione `Enter` para continuar após executar uma operação.

---

## 🎯 Objetivo

Este projeto foi desenvolvido como parte do aprendizado em TypeScript e programação orientada a objetos, com o intuito de criar uma aplicação funcional e intuitiva para gerenciar produtos.

---

### 🏆 Obrigado por conferir o projeto! 🙌

