import {api} from "../services/api";
import { IClientsProps } from "../types/apiResult";

const base = 'clients/'


const getAllClients = async()=> await api.get(base).then(({data})=>data).catch(err=>console.log({err}))
const createNewClient = async(client:IClientsProps)=> await api.post(base,client).catch(err=>console.log({err}))
const deleteClient = async(id:string)=> await api.delete(base.concat(id)).catch(err=>console.log({err}))
const editClient = async(id:string, newClientData:any)=> await api.put(base.concat(id), newClientData).catch(err=>console.log({err}))


export {getAllClients, createNewClient, deleteClient, editClient}