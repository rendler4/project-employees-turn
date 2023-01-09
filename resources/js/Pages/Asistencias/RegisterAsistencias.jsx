import '/resources/css/toggle.css';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';


export default function RegisterAsistencias(props) {

    const elSwitchs = document.querySelectorAll('.elSwitch')
    elSwitchs.forEach( e => {
        e.addEventListener('click', function(){
            if (e.classList.contains('left-[155px]')){
                e.classList.remove('left-[155px]')
                e.classList.add('left-1')
            }else {
                e.classList.remove('left-1')
                e.classList.add('left-[155px]')
            }

        })
    } )

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>}
        >
            <Head title="Dashboard" />

            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js" defer></script>

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">


                            <div className="bg-slate-700 h-screen px-10 py-20 w-full">
                                <form>
                                    <div className="max-w-xl">
                                        <div className="flex space-x-1 items-center mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-white text-lg font-semibold">Ingrese su número de cédula</p>
                                        </div>
                                        <div className="flex space-x-4">
                                            <div className="flex rounded-md overflow-hidden w-full">
                                                <input type="text" className="w-full rounded-md rounded-r-none" />
                                                <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Marcar!</button>
                                            </div>
                                            <button className="bg-white px-6 text-lg font-semibold py-4 rounded-md">Limpíar</button>
                                        </div>
                                    </div>
                                </form>

                                <div className="flex flex-col p-8 mt-16 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="w-16 h-16 rounded-2xl p-3 border border-gray-800 text-blue-400 bg-gray-900"
                                                 fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <div className="flex flex-col ml-3">
                                                <div className="font-medium leading-none text-gray-100">Delete Your
                                                    Acccount ?
                                                </div>
                                                <p className="text-sm text-gray-500 leading-none mt-1">By deleting your
                                                    account you will lose your all data
                                                </p>
                                            </div>
                                        </div>


            {/*                            <button
                                            className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Ingreso/Salida
                                        </button>*/}
{/*                                        <div
                                            className="mx-8 w-80 shadow rounded-full h-10 mt-4 flex p-1 relative items-center">
                                            <div className="w-full flex justify-center">
                                                <button>Ingreso</button>
                                            </div>
                                            <div className="w-full flex justify-center">
                                                <button>Salida</button>
                                            </div>
                                            <span
                                                className="elSwitch bg-indigo-600 shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute left-1 ">
        Ingreso / Salida
        </span>
                                        </div>*/}

                                        <div className='row'>

                                        <div className='col-6'>
                                            <span
                                                className="relative bg-indigo-600 shadow text-white flex items-center justify-center w-60 rounded-full h-8  ">
        Ingreso / Salida
        </span>
                                        </div>

                                        <div className='col-6 mt-16'>

                                            <input type="checkbox" id="toggle_checkbox"/>

                                            <label htmlFor="toggle_checkbox">
                                                <div id="star">
                                                    <div className="star" id="star-1">★</div>
                                                    <div className="star" id="star-2">★</div>
                                                </div>
                                                <div id="moon"></div>
                                            </label>

                                        </div>

</div>








                                        <div className='button w-40 h-16 bg-blue-500  cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    rounded-full  border-[1px] border-blue-400

  '>
                            <span x-on:click="activeTab = 1"
                                  className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Confirmar</span>
                                        </div>

                                    </div>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
