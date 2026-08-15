export interface FipeItem {
  codigo: string;
  nome: string;
}

export interface DetalheMarca {
  modelos: FipeItem[];
  anos: FipeItem[];
}

export interface Veiculo {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}

export interface Marca extends FipeItem {}
export interface Anos extends FipeItem {}
