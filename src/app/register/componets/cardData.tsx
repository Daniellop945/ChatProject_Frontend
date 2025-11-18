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
    const emailRef = useRef<HTMLInputElement>(null)
    const cellRef = useRef<HTMLInputElement>(null)
    const countryRef = useRef<HTMLInputElement>(null)
    const userRef = useRef<HTMLInputElement>(null)
    const dirRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLInputElement>(null)
    const divRef1 = useRef<HTMLInputElement>(null)
    const divRef2 = useRef<HTMLInputElement>(null)
    const divRef3 = useRef<HTMLInputElement>(null)
    const divRef4 = useRef<HTMLInputElement>(null)
    const divRef5 = useRef<HTMLInputElement>(null)
    const divRef6 = useRef<HTMLInputElement>(null)

    const [country, Setcountry] = useState('')
    
    const nameRegex = new RegExp("^[A-Za-z]+([\\s][A-Za-z]+)*$")
    const emailRegex = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$")
    const cellRegex = new RegExp("^[0-9]{0,}$")
    const dirRegex = new RegExp("^[A-Za-z]+#[0-9]{1,}[A-Za-z]{0,}$")
    const userRegex = new RegExp("^[A-Za-z0-9]([A-Za-z0-9_]*[A-Za-z0-9])?$")

    const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        
        const {name, value} = e.target

        const inputName = nameRef.current
        const inputAge = ageRef.current
        const inputEmail = emailRef.current
        const inputCell = cellRef.current
        const inputDir = dirRef.current
        const divName = divRef.current
        const divName1 = divRef1.current
        const divAge = divRef2.current
        const divEmail = divRef3.current
        const divCell = divRef4.current
        const divCell1 = divRef5.current
        const divDir = divRef6.current

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

        if(name === 'email'){
            if(emailRegex.test(value) === true){
                divEmail?.classList.add('hidden')
                inputEmail?.classList.remove('border-red-400')
                inputEmail?.classList.add('border-violet-400')
            }
            else{
                divEmail?.classList.remove('hidden')
                inputEmail?.classList.remove('border-violet-400')
                inputEmail?.classList.add('border-red-400')
            }
        }

        if(name === 'cellphone'){
            if(cellRegex.test(value) === true){
                divCell?.classList.add('hidden')
                inputCell?.classList.remove('border-red-400')
                inputCell?.classList.add('border-violet-400')
            }
            else{
                divCell?.classList.remove('hidden')
                inputCell?.classList.remove('border-violet-400')
                inputCell?.classList.add('border-red-400')
            }
            if(value.length < 10){
                divCell1?.classList.remove('hidden')
                inputCell?.classList.remove('border-violet-400')
                inputCell?.classList.add('border-red-400')
            }
            else{
                divCell1?.classList.add('hidden')
                inputCell?.classList.remove('border-red-400')
                inputCell?.classList.add('border-violet-400')
            }
        }

        if(name === 'direction'){
            if(dirRegex.test(value.replaceAll(" ", "")) === true){
                divDir?.classList.add('hidden')
                inputDir?.classList.remove('border-red-400')
                inputDir?.classList.add('border-violet-400')
            }
            else{
                divDir?.classList.remove('hidden')
                inputDir?.classList.add('border-red-400')
                inputDir?.classList.remove('border-violet-400')
            }
        }

        if(name === 'code') {
            const countryName = new Intl.DisplayNames(['es'], {type: 'region'}).of(value) 
            Setcountry(countryName + '')
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
                                    <div className='text-red-400 hidden' ref={divRef2}>
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
                                        ref={emailRef}
                                        id='email' 
                                        name='email' 
                                        type='email' 
                                        value={dataForm.email} 
                                        onChange={handleChange} 
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none" 
                                        placeholder="example@gmail.com" 
                                    />
                                    <div className='text-red-400 hidden' ref={divRef3}>
                                        <label className='text-xs'>
                                            Incorrect format, check the example.
                                        </label>
                                    </div>
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
                                                className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none"
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
                                                ref={cellRef}
                                                placeholder="Cellphone"
                                                id='cellphone' 
                                                name='cellphone'
                                                type="tel"
                                                value={dataForm.cellphone} 
                                                onChange={handleChange} 
                                                className="w-34 ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none" 
                                            />
                                            <div className='text-red-400 hidden' ref={divRef4}>
                                                <label className='text-xs'>
                                                    Only contain numbers
                                                </label>
                                            </div>
                                            <div className='text-red-400 hidden' ref={divRef5}>
                                                <label className='text-xs'>
                                                    Length of 10 characters
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope='row'>Direction</th>
                                <th scope='row'>
                                    <input 
                                        ref={dirRef}
                                        id='direction' 
                                        name='direction'
                                        value={dataForm.direction}
                                        onChange={handleChange} 
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none" 
                                        placeholder='plata #76 moroleon'
                                    />
                                    <div className='text-red-400 hidden' ref={divRef6}>
                                        <label className='text-xs'>
                                            Invalid format, check the example
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th scope='row'>Country</th>
                                <th scope='row'>
                                    <input 
                                        ref={countryRef}
                                        id='country' 
                                        name='country'
                                        value={country} 
                                        onChange={handleChange} 
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none" 
                                        disabled
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
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none" 
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
                                        className="ml-3 mb-2 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none" 
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