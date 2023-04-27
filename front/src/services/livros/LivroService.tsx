import axios, { AxiosResponse } from "axios";
import { httpDjango } from "@/src/api/axios";

const Url = 'cadastro/api'

export const LivroService = () => {

  const getLivros = async (): Promise<any> => {
    const url:string = `${Url}/livro`
    const respo:AxiosResponse<any> = await httpDjango.get(url)
    return respo.data

  }

  const getLivroId = async (id:any): Promise<any> => {
    const url:string = `${Url}/livro/${id}`
    const respo:AxiosResponse<any> = await httpDjango.get(url, id)
    return respo.data
  }

  const atualizarLivroId = async (id:any): Promise<any> => {
    const url:string = `${Url}/livro/${id}`
    const respo:AxiosResponse<any> = await httpDjango.put(url, id)
    return respo.data
  }

  const deletarLivroId = async (id:any): Promise<any> => {
    const url:string = `${Url}/livro/${id}`
    const respo:AxiosResponse<any> = await httpDjango.delete(url, id)
    return respo.data
  }

  const criarLivro = async (): Promise<any> => {
    const url:string = `${Url}/livro`
    const respo:AxiosResponse<any> = await httpDjango.post(url)
    return respo.data
  }

  return { 
    getLivros,
    getLivroId,
    atualizarLivroId,
    deletarLivroId,
    criarLivro
   }
}