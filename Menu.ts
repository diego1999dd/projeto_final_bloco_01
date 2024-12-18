import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Acessorio } from "./src/model/Acessorio";
import { Eletronico } from "./src/model/Eletronico";

export function main() {
  let id, tipo, preco, opcao, garantia: number;
  let nome,
    marca,
    modelo,
    voltagem,
    tipoAcessorio,
    cor,
    material,
    tamanho: string;

  const tipoProdutos = ["Eletronico", "Acessorio"];

  const produtos = new ProdutoController();

  produtos.cadastrarProduto(
    new Eletronico(
      produtos.gerarId(), // id gerado automaticamente pelo gerarid
      "Smartphone Samsung Galaxy S23",
      1, // eletronico
      3500, // preço
      "Samsung", // marca
      "Galaxy S23", // modelo
      24, // garantia em meses
      "110V" // voltagem
    )
  );

  produtos.cadastrarProduto(
    new Eletronico(
      produtos.gerarId(),
      "Notebook Dell Inspiron 15",
      1, // Eletrônico
      4000,
      "Dell", // marca
      "Inspiron 15",
      12, // garantia em meses
      "220V" // voltagem
    )
  );

  produtos.cadastrarProduto(
    new Acessorio(
      produtos.gerarId(),
      "Fone de Ouvido Bluetooth",
      2, // Acessório
      150, // preço
      "Bluetooth", // tipo de acessório
      "Preto", // cor
      "Plástico", // material
      "Médio" // tamanho
    )
  );

  produtos.cadastrarProduto(
    new Acessorio(
      produtos.gerarId(),
      "Carregador USB-C para Notebook",
      2, // Acessório
      50,
      "USB-C", // tipo de acessório
      "Branco", // cor
      "Plástico", // material
      "Padrão" // tamanho
    )
  );

  while (true) {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("         💻 TechZone - Eletrônicos e Acessórios      ");
    console.log("                                                      ");
    console.log("*****************************************************");
    console.log("                                                      ");
    console.log("            1 - 📝 Cadastrar Produto                 ");
    console.log("            2 - 📋 Listar todos os Produtos          ");
    console.log("            3 - 🔎 Consultar Produtos por Id         ");
    console.log("            4 - ✏️  Atualizar Produto                ");
    console.log("            5 - 🗑️  Deletar Produto                  ");
    console.log("            0 - 🚪 Sair                              ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 0) {
      console.log("\nTechZone - Tudo para seu mundo conectado!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\n📝  Cadastrar Produto\n\n");
        console.log("Digite o ID do Produto: ");
        id = readlinesync.questionInt("");

        console.log("Digite o Nome do Produto: ");
        nome = readlinesync.question("");

        console.log("Escolha se é um Eletronico ou Acessorio: ");
        tipo =
          readlinesync.keyInSelect(tipoProdutos, "", { cancel: false }) + 1;

        console.log("\nDigite o Preco do Produto: ");
        preco = readlinesync.questionInt("");

        switch (tipo) {
          case 1:
            console.log("Digite a Marca: ");
            marca = readlinesync.question("");

            console.log("Digite o Modelo: ");
            modelo = readlinesync.question("");

            console.log("Digite a Garantia: ");
            garantia = readlinesync.questionFloat("");

            console.log("Digite a Voltagem: ");
            voltagem = readlinesync.question("");

            produtos.cadastrarProduto(
              new Eletronico(
                produtos.gerarId(),
                nome,
                tipo,
                preco,
                marca,
                modelo,
                garantia,
                voltagem
              )
            );
            break;
          case 2:
            console.log("Digite o Tipo de Acessorio: ");
            tipoAcessorio = readlinesync.question("");

            console.log("Digite a Cor: ");
            cor = readlinesync.question("");

            console.log("Digite o Material: ");
            material = readlinesync.question("");

            console.log("Digite o Tamanho: ");
            tamanho = readlinesync.question("");

            produtos.cadastrarProduto(
              new Acessorio(
                produtos.gerarId(),
                nome,
                tipo,
                preco,
                tipoAcessorio,
                cor,
                material,
                tamanho
              )
            );
            break;
        }
        keyPress();
        break;

      case 2:
        console.log("\n\n📋  Listar todos os Produtos\n\n");
        produtos.listarTodosOsProdutos();
        keyPress();
        break;
      case 3:
        console.log("\n\n🔎  Consultar Produtos por Id\n\n");
        console.log("Digite o ID do Produto: ");
        id = readlinesync.questionInt("");
        produtos.consultarProdutoPorId(id);

        keyPress();
        break;
      case 4:
        console.log("\n\n✏️  Atualizar Produto\n\n");
        id = readlinesync.questionInt(
          "Digite o ID do Produto a ser atualizado: "
        );
        let produto = produtos.buscarNoArray(id);

        if (produto !== null) {
          nome = readlinesync.question("Digite o novo Nome do Produto: ");
          preco = readlinesync.questionFloat(
            "Digite o novo Preco do Produto: "
          );
          tipo = produto.tipo;

          switch (tipo) {
            case 1:
              console.log("Digite a Nova Marca: ");
              marca = readlinesync.question("");

              console.log("Digite o Novo Modelo: ");
              modelo = readlinesync.question("");

              console.log("Digite a Nova Garantia: ");
              garantia = readlinesync.questionFloat("");

              console.log("Digite a Nova Voltagem: ");
              voltagem = readlinesync.question("");

              produtos.atualizarProduto(
                new Eletronico(
                  id,
                  nome,
                  tipo,
                  preco,
                  marca,
                  modelo,
                  garantia,
                  voltagem
                )
              );
              break;
            case 2:
              console.log("Digite o Novo Tipo de Acessorio: ");
              tipoAcessorio = readlinesync.question("");

              console.log("Digite a Nova Cor: ");
              cor = readlinesync.question("");

              console.log("Digite o Novo Material: ");
              material = readlinesync.question("");

              console.log("Digite o Novo Tamanho: ");
              tamanho = readlinesync.question("");

              produtos.atualizarProduto(
                new Acessorio(
                  id,
                  nome,
                  tipo,
                  preco,
                  tipoAcessorio,
                  cor,
                  material,
                  tamanho
                )
              );
              break;
          }
          console.log("✅ Produto atualizado com sucesso!");
        } else {
          console.log("❌ Produto não encontrado!");
        }
        keyPress();
        break;
      case 5:
        console.log("\n\n🗑️  Deletar Produto \n\n ");
        console.log("Digite o Id do Produto que você quer deletar:");
        id = readlinesync.questionInt("");

        produtos.deletarProduto(id);
        keyPress();
        break;
      default:
        console.log("\nOpção Inválida!\n");
        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */

function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Diego");
  console.log("Generation Brasil - diegon@genstudents.org");
  console.log("github.com/diego1999dd");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log("");
  console.log("\n⏎  Pressione enter para continuar...");
  readlinesync.prompt();
}
main();
