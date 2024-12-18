import { Produto } from "./Produto";

// Essa é uma subclasse e só ira herdar da Super classe Produto
export class Eletronico extends Produto {
  private _marca: string;
  private _modelo: string;
  private _garantia: number;
  private _voltagem: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    marca: string,
    modelo: string,
    garantia: number,
    voltagem: string
  ) {
    super(id, nome, tipo, preco);
    this._marca = marca;
    this._modelo = modelo;
    this._garantia = garantia;
    this._voltagem = voltagem;
  }

  public get marca(): string {
    return this._marca;
  }

  public get modelo(): string {
    return this._modelo;
  }

  public get garantia(): number {
    return this._garantia;
  }

  public get voltagem(): string {
    return this._voltagem;
  }

  public set marca(value: string) {
    this._marca = value;
  }

  public set modelo(value: string) {
    this._modelo = value;
  }

  public set garantia(value: number) {
    this._garantia = value;
  }

  public set voltagem(value: string) {
    this._voltagem = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`Marca: ${this._marca}`);
    console.log(`Modelo: ${this._modelo}`);
    console.log(`Garantia em Meses: ${this._garantia}`);
    console.log(`Voltagem: ${this._voltagem}`);
  }
}
