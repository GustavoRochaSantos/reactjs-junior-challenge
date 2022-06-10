import { useState } from "react";

const useForm = (initialState: { guid: string; name: string; company: string; email: string; phone: string; address: string; note: string; isActive: boolean; }) =>{
    const [form, setForm] = useState(initialState)

    const handleInputChange = (event: { target: { value: any; name: any; }; }) =>{
        const{value, name} = event.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, handleInputChange, clear]
}

export default useForm

