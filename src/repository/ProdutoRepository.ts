import { Produto } from "../model/Produto";

export interface ProdutoRepository {
  cadastrarProduto(produto: Produto): void;
  listarTodosOsProdutos(): void;
  consultarProdutoPorId(id: number): void;
  atualizarProduto(produto: Produto): void;
  deletarProduto(numero: number): void;
}
