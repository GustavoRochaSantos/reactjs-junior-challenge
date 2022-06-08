import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {IClientsProps} from "../../types/apiResult";
import {api} from "../../services/api";
import {createNewClient, deleteClient, editClient, getAllClients} from "../../helpers/crudOperator";
import {uuid} from "uuidv4";

export const App =()=> {
const [data,setData] =useState<IClientsProps[]>([])
const [loading,setLoading] =useState<boolean>(true)
const [send, setSend] = useState<IClientsProps>({
    id:'',
    name:'',
    address:'',
    email:'',
    company:'',
    phone:'',
    note:'',
    isActive:true
})

useEffect( () => {
   getAllClients().then((res:any) => {
       setData(res)
       setLoading(false)
   })
}, [data])


const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setSend({...send,
        [event.target.name]:event.target.value,
        id:uuid()
    })
}

const handleClick = ()=>{
    const dt = data
    dt.push(send)
    setData(dt)
    createNewClient(send).then(res=>console.log(res))
}
  return (

        <div className="App">
            <div >
                <h1>Form Client Save</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name={'name'} onChange={handleChange}/>
                    {
                        send.name ==='' && <span>is required</span>
                    }
                </div>
                <div>
                    <label htmlFor="">address</label>
                    <input type="text" name={'address'} onChange={handleChange}/>
                    {
                        send.address ==='' && <span>is required</span>
                    }
                </div>
                <div>
                    <label htmlFor="">company</label>
                    <input type="text" name={'company'} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">phone</label>
                    <input type="text" name={'phone'} onChange={handleChange}/>
                    {
                        send.phone ==='' && <span>is required</span> || !send.phone.includes('+') && <span>please enter a valid phone number</span>
                    }
                </div>
                <div>
                    <label htmlFor="">email</label>
                    <input type="text" name={'email'} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">note</label>
                    <input type="text" name={'note'} onChange={handleChange}/>
                </div>

                <button type="submit" onClick={handleClick}>salvar</button>

            </div>

            <h1>Tbale Content Client Datas</h1>
            {
                loading ? <span>loading...</span>:
                    <table >
                        <thead >
                        <tr >
                            <th>N.</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Company</th>
                            <th>Phone</th>
                            <th>email</th>
                            <th>Note</th>
                            <th>State</th>
                            <th>Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data?.map((item, index)=>
                                <tr key={item.id}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.company}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.note}</td>
                                    <td>{item.isActive}</td>
                                    <td>
                                        <button onClick={()=> {
                                            data?.splice(index, 1)
                                            deleteClient(item.id)
                                        }}>delete</button>
                                        <button onClick={()=> {
                                            data?.splice(index, 1)
                                            editClient(item.id, {
                                                id: "19:40:57-avogadro",
                                                name: "Sebastião de Sousa Moniz",
                                                address: "Brasil",
                                                email: "cientistaavogadro2019@gmail.com",
                                                company: "",
                                                phone: "",
                                                note: "",
                                                isActive: false
                                            })
                                        }}>editar</button>
                                    </td>

                                </tr>
                            )
                        }
                        </tbody>


                    </table>
            }

        </div>
  )
}
