import readlinesync = require("readline-sync");

export function main() {
  let opcao: number;

  while (true) {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            TechZone - Eletrônicos e Acessórios      ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Cadastrar Produto                    ");
    console.log("            2 - Listar todos os Produtos              ");
    console.log("            3 - Consultar Produtos por Id             ");
    console.log("            4 - Atualizar Produto                     ");
    console.log("            5 - Deletar Produto                       ");
    console.log("            0 - Sair                                  ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
      console.log("\nTechZone - Tudo para seu mundo conectado!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nCadastrar Produto\n\n");

        break;
      case 2:
        console.log("\n\nListar todos os Produtos\n\n");

        break;
      case 3:
        console.log("\n\nConsultar Produtos por Id\n\n");

        break;
      case 4:
        console.log("\n\nAtualizar Produto\n\n");

        break;
      case 5:
        console.log("\n\nDeletar Produto\n\n");

        break;
      default:
        console.log("\nOpção Inválida!\n");
        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: Diego");
  console.log("Generation Brasil - diegon@genstudents.org");
  console.log("github.com/diego1999dd");
  console.log("*****************************************************");
}

main();
