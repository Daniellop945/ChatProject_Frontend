import { useState, ChangeEvent, FormEvent, useRef } from 'react'
import { getCountries, getCountryCallingCode } from "libphonenumber-js"
import Link from 'next/link'
import Toast from './toast'
import Image from 'next/image'
import bg from "@/app/Img/password/show.png"

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
    username: string
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
        username: '',
        password: ''
    };

    const [dataForm, setDataForm] = useState<FormData>(initialState)
    const [isVisibleToast, setVisibleToast] = useState(false)
    const [isVisibleToast1, setVisibleToast1] = useState(false)
    
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
    const divRef7 = useRef<HTMLInputElement>(null)
    const divRef8 = useRef<HTMLInputElement>(null)
    const divRef9 = useRef<HTMLInputElement>(null)

    const [country, Setcountry] = useState('México')
    
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
        const inputUser = userRef.current
        const divName = divRef.current
        const divName1 = divRef1.current
        const divAge = divRef2.current
        const divEmail = divRef3.current
        const divCell = divRef4.current
        const divCell1 = divRef5.current
        const divDir = divRef6.current
        const divUser = divRef7.current
        const divUser1 = divRef8.current
        const divUser2 = divRef9.current

        if(name === 'name') {
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

        if(name === 'age') {
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

        if(name === 'email') {
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

        if(name === 'cellphone') {
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

        if(name === 'direction') {
            if(dirRegex.test(value.replaceAll(" ", "")) === true){
                divDir?.classList.add('hidden')
                inputDir?.classList.remove('border-red-400')
                inputDir?.classList.add('border-violet-400')
            }
            else{
                divDir?.classList.remove('hidden')
                inputDir?.classList.remove('border-violet-400')
                inputDir?.classList.add('border-red-400')
            }
        }

        if(name === 'code') {
            const countryName = new Intl.DisplayNames(['es'], {type: 'region'}).of(value) 
            Setcountry(countryName + '')
        }

        if(name === 'username') {
            if(value.length < 3 || value.length > 15){
                divUser?.classList.remove('hidden')
                inputUser?.classList.remove('border-violet-400')
                inputUser?.classList.add('border-red-400')
            }
            else{
                divUser?.classList.add('hidden')
                inputUser?.classList.remove('border-red-400')
                inputUser?.classList.add('border-violet-400')
            }
            if(value.startsWith('_') === true || value.endsWith('_') === true) {
                divUser2?.classList.remove('hidden')
                inputUser?.classList.remove('border-violet-400')
                inputUser?.classList.add('border-red-400')
            }
            else if(value.length >= 3 && value.length <= 15) {
                divUser2?.classList.add('hidden')
                inputUser?.classList.remove('border-red-400')
                inputUser?.classList.add('border-violet-400')
            }
            if(userRegex.test(value) === true && value.length >= 3 && value.length <= 15){
                divUser1?.classList.add('hidden')
                inputUser?.classList.remove('border-red-400')
                inputUser?.classList.add('border-violet-400')
            }
            else {
                divUser1?.classList.remove('hidden')
                inputUser?.classList.remove('border-violet-400')
                inputUser?.classList.add('border-red-400')
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

    const showToast = () => {
        if(isVisibleToast === false) setVisibleToast(true)
        else setVisibleToast(false)
    }

    const showToast1 = () => {
        if(isVisibleToast1 === false) setVisibleToast1(true)
        else setVisibleToast1(false)
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
                                            Incorrect format, check the example
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
                                <th scope='row'>
                                    <label>Country</label>
                                    <button className='rounded-full w-5 h-5 bg-blue-300 ml-2 hover:bg-blue-600 text-white' 
                                        onClick={() => {
                                            showToast1()
                                        }}
                                    >
                                        ?
                                    </button>
                                </th>
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
                            <tr className='justify-center items-center'>
                                <th scope='row' className='justify-center items-center'>
                                    <label>Username</label>
                                    <button className='rounded-full w-5 h-5 bg-blue-300 ml-2 hover:bg-blue-600 text-white' 
                                        onClick={() => {
                                            showToast()
                                        }}
                                    >
                                        ?
                                    </button>
                                </th>
                                <th scope='row'>
                                    <input 
                                        ref={userRef}
                                        id='username' 
                                        name='username' 
                                        value={dataForm.username} 
                                        onChange={handleChange} 
                                        placeholder='user945_gamer, X_X_X, a'
                                        className="ml-3 mb-1 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none" 
                                    />
                                    <div className='text-red-400 hidden' ref={divRef7}>
                                        <label className='text-xs'>
                                            Username of 3 to 15 characters
                                        </label>
                                    </div>
                                    <div className='text-red-400 hidden' ref={divRef8}>
                                        <label className='text-xs'>
                                            Invalid format, check the help.
                                        </label>
                                    </div>
                                    <div className='text-red-400 hidden' ref={divRef9}>
                                        <label className='text-xs'>
                                            Username cannot begin with _ or end with _
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th scope='row'>Password</th>
                                <th scope='row' className=''>
                                    <div className="relative w-full max-w-sm">
                                        <input 
                                            id='password' 
                                            name='password'
                                            type='password' 
                                            value={dataForm.password} 
                                            onChange={handleChange}
                                            className="ml-3 mb-2 pl-2 p-1 pr-2 bg-white rounded-2xl border-violet-400 border-2 focus:ring-0 focus:outline-none" 
                                            
                                        />
                                        <button type="button" className="absolute inset-y-1/2 right-0 flex justify-center items-center text-center pr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400 hover:text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.433 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </button>
                                    </div>
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
            {
                isVisibleToast && (
                    <Toast message={'The username cannot begin with _ or end with _\nit is also not possible to use special characters, as only _\nand alphanumeric characters are allowed.'}/>
                )
            }
            {
                isVisibleToast1 && (
                    <Toast message={'The country has the same value as the selected code.'}/>
                )
            }
        </div>
    );
}

export default Card;