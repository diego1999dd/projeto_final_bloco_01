import { Produto } from "./Produto";

export class Acessorio extends Produto {
  private _tipoAcessorio: string;
  private _cor: string;
  private _material: string;
  private _tamanho: string;

  constructor(
    id: number,
    nome: string,
    tipo: number,
    preco: number,
    tipoAcessorio: string,
    cor: string,
    material: string,
    tamanho: string
  ) {
    super(id, nome, tipo, preco);
    this._tipoAcessorio = tipoAcessorio;
    this._cor = cor;
    this._material = material;
    this._tamanho = tamanho;
  }

  public get tipoAcessorio(): string {
    return this._tipoAcessorio;
  }

  public get cor(): string {
    return this._cor;
  }

  public get material(): string {
    return this._material;
  }

  public get tamanho(): string {
    return this._tamanho;
  }

  public set tipoAcessorio(value: string) {
    this._tipoAcessorio = value;
  }

  public set cor(value: string) {
    this._cor = value;
  }

  public set material(value: string) {
    this._material = value;
  }

  public set tamanho(value: string) {
    this._tamanho = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`Tipo: ${this._tipoAcessorio}`);
    console.log(`Cor: ${this._cor}`);
    console.log(`Material: ${this._material}`);
    console.log(`Tamanho: ${this._tamanho}`);
  }
}
