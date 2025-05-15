export interface IOwner {
  tipo?: string | undefined | null
  cpf_cnpj: string | undefined | null
  nome?: string | undefined | null
  email?: string | undefined | null
  data_nascimento?: string | undefined | null
  rg?: string | undefined | null
  orgao_emissor?: string | undefined | null
  telefone_celular?: string | undefined | null
  telefone_fixo?: string | undefined | null
  url_arquivo_comprovante?: string | undefined | null
}

export interface IANTT {
  transportador?: string | undefined | null
  cnpj?: string | undefined | null
  num_rntrc?: string | undefined | null
  categoria?: string | undefined | null
  data_emissao?: string | undefined | null
  situacaoo?: string | undefined | null
  observacao?: string | undefined | null
  tipo_veiculo?: string | undefined | null
  placa?: string | undefined | null
  tag?: string | undefined | null
  url_arquivo_antt?: string | undefined | null
}

export interface IVehiclesPhotos {
  url_foto_1?: string | undefined | null
  url_foto_2?: string | undefined | null
  url_foto_3?: string | undefined | null
  url_foto_4?: string | undefined | null
  url_foto_5?: string | undefined | null
  modified_at?: string | undefined | null
}

export interface ICNH {
  nome?: string | undefined | null
  cpf?: string | undefined | null
  cnh?: string | undefined | null
  categoria?: string | undefined | null
  primeira_habilitacao?: string | undefined | null
  emissao?: string | undefined | null
  validade?: string | undefined | null
  estado_emissao?: string | undefined | null
  observacao?: string | undefined | null
  url_arquivo_cnh?: string | undefined | null
}

export interface IAddress {
  cep?: string | undefined | null
  endereco?: string | undefined | null
  numero?: string | undefined | null
  bairro?: string | undefined | null
  complemento?: string | undefined | null
  cidade?: string | undefined | null
  uf?: string | undefined | null
  url_arquivo_endereco?: string | undefined | null
}

export interface IVehicle {
  tipo?: string | undefined | null
  placa: string
  renavam?: string | undefined | null
  chassi?: string | undefined | null
  ano_fabricacao?: string | undefined | null
  marca?: string | undefined | null
  modelo?: string | undefined | null
  cor?: string | undefined | null
  eixos?: string | undefined | null
  uf_emplacamento?: string | undefined | null
  cidade_emplacamento?: string | undefined | null
  url_arquivo_crlv?: string | undefined | null
  proprietario?: IOwner
  antt?: IANTT
  fotos?: IVehiclesPhotos
}

export interface IDriver {
  nome: string
  cpf: string
  created?: string | undefined | null | null
  data_nascimento?: string | undefined | null | null
  email?: string | undefined | null
  rg?: string | undefined | null
  orgao_emissor?: string | undefined | null
  telefone_principal?: string | undefined | null
  telefone_recado?: string | undefined | null
  data_criacao?: string | undefined | null
  endereco?: IAddress
  cnh?: ICNH
  veiculos?: IVehicle[]
}
