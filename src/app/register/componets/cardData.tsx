import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import Link from 'next/link';

const countryOptions = getCountries().map(code => {
    try {
        const callingCode = getCountryCallingCode(code);
        return {
            isoCode: code,
            label: `(${callingCode}) ${code}`,
            value: code,
            callingCode: `+${callingCode}`
        };
    } catch (e) {
        return null;
    }
}).filter(option => option !== null);

interface FormData {
    name: string
    age: string
    email: string
    code: string 
    cellphone: string
    direction: string
    country: string 
    usename: string
    password: string
}

export function Card() {

    const initialState = {
        name: '',
        age: '',
        email: '',
        code: 'MX', 
        cellphone: '',
        direction: '',
        country: '',
        usename: '',
        password: ''
    };

    const [dataForm, setDataForm] = useState<FormData>(initialState)
    
    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLInputElement>(null)
    const divRef1 = useRef<HTMLInputElement>(null)
    const divRef2 = useRef<HTMLInputElement>(null)
    
    const nameRegex = new RegExp("^[A-Za-z]+([\\s][A-Za-z]+)*$")
    const emailRegex = new RegExp("")

    const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target

        const inputName = nameRef.current
        const inputAge = ageRef.current
        const divName = divRef.current
        const divName1 = divRef1.current
        const divAge = divRef2.current

        if(name === 'name'){
            if(value.length < 4){
                divName?.classList.remove('hidden')
                inputName?.classList.add('border-red-400')
                inputName?.classList.remove('border-violet-400')
            }
            else{
                divName?.classList.add('hidden')
                inputName?.classList.remove('border-red-400')
                inputName?.classList.add('border-violet-400')
            }
            if(nameRegex.test(value.replace(/\s+/g, " ").trim())){
                divName1?.classList.add('hidden')
            }
            else{
                divName1?.classList.remove('hidden')
                inputName?.classList.add('border-red-400')
                inputName?.classList.remove('border-violet-400')
            }
        }

        if(name === 'age'){
            if(parseInt(value, 10) < 12){
                divAge?.classList.remove('hidden')
                inputAge?.classList.remove('border-violet-400')
                inputAge?.classList.add('border-red-400')
            }
            else{
                divAge?.classList.add('hidden')
                inputAge?.classList.remove('border-red-400')
                inputAge?.classList.add('border-violet-400')
            }
        }
        
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setDataForm(initialState)
    }

    return (
        <div className="bg-violet-200 min-h-80 min-w-100 rounded-2xl justify-center text-center items-center shadow-lg border-2 border-black shadow-black">
            <div className="bg-violet-500 p-2 rounded-t-xl font-bold border-b-2 border-black">
                <h3>Register</h3>
            </div>
            <div className="m-4 text-black">
                <form action="" id='form' onSubmit={handleSubmit}>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <th scope='row'>Name</th>
                                <th scope='row'>
                                    <input 
                                        ref={nameRef}
                                        id='name' 
                                        name='name'
                                        value={dataForm.name} 
                                        onChange={handleChange} 
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none" 
                                    />
                                    <div className='text-red-400 hidden' ref={divRef}>
                                        <label className='text-xs'>
                                            Minimum name length 4 characters
                                        </label>
                                    </div>
                                    <div className='text-red-400 hidden' ref={divRef1}>
                                        <label className='text-xs'>
                                            The name must only contain letters
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th scope='row'>Age</th>
                                <th scope='row'>
                                    <input 
                                        ref={ageRef}
                                        id='age' 
                                        name='age' 
                                        type='number' 
                                        value={dataForm.age} 
                                        onChange={handleChange} 
                                        placeholder='12-80 years old'
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none" 
                                    />
                                    <div className='text-red-400' ref={divRef2}>
                                        <label className='text-xs'>
                                            To register you must be 12 years of age
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th scope='row'>Email</th>
                                <th scope='row'>
                                    <input 
                                        id='email' 
                                        name='email' 
                                        type='email' 
                                        value={dataForm.email} 
                                        onChange={handleChange} 
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800" 
                                        placeholder="example@gmail.com" 
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th scope='row'>Cellphone number</th>
                                <td>
                                    <div className='flex'>
                                        <div className='w-1/1'>
                                            <select 
                                                id='code' 
                                                name='code'
                                                value={dataForm.code} 
                                                onChange={handleChange} 
                                                className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800"
                                            >
                                                {countryOptions.map(country => (
                                                    <option key={country.isoCode} value={country.value}>
                                                        {country.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <input 
                                                placeholder="Number"
                                                id='cellphone' 
                                                name='cellphone'
                                                type="tel" 
                                                value={dataForm.cellphone} 
                                                onChange={handleChange} 
                                                className="w-34 ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800" 
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>Direction</th>
                                <th scope='row'>
                                    <input 
                                        id='direction' 
                                        name='direction'
                                        value={dataForm.direction}
                                        onChange={handleChange} 
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800" 
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th scope='row'>Contry</th>
                                <th scope='row'>
                                    <input 
                                        id='country' 
                                        name='country'
                                        value={dataForm.country} 
                                        onChange={handleChange} 
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800" 
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th scope='row'>Username</th>
                                <th scope='row'>
                                    <input 
                                        id='username' 
                                        name='usename' 
                                        value={dataForm.usename} 
                                        onChange={handleChange} 
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800" 
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th scope='row'>Password</th>
                                <th scope='row'>
                                    <input 
                                        id='password' 
                                        name='password'
                                        type='password' 
                                        value={dataForm.password} 
                                        onChange={handleChange}
                                        className="ml-3 mb-2 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:outline-violet-800" 
                                    />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="text-white mb-2 w-70 max-w-sm mx-auto bg-violet-400 border hover:bg-violet-700 flex items-center justify-center p-1 rounded-2xl">
                        Register
                    </button>
                </form>
                <Link className="text-violet-800" href={'/'}>Return</Link>
            </div>
        </div>
    );
}

export default Card;