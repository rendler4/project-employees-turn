import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function ListEmployees(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>}
        >
            <Head title="Dashboard" />


            <div x-data="{ activeTab:1 }" className="container mx-auto">
                <ul className="flex justify-center space-x-2 text-white mt-4">
                    <li>
{/*                        <a href="#" x-on:click="activeTab = 1"
                           className="inline-block px-4 py-2 bg-purple-500">Listado</a>*/}

                        <div className='button w-40 h-16 bg-blue-500  cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    rounded-full  border-[1px] border-blue-400

  '>
                            <span x-on:click="activeTab = 1"
                                className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Listado</span>
                        </div>

                    </li>
                    <li>
                        {/*<a href="#" x-on:click="activeTab = 2"
                           className="inline-block px-4 py-2 bg-purple-500">Registro</a>*/}


                        <div x-on:click="activeTab = 2" className='button w-40 h-16 bg-blue-500  cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    rounded-full  border-[1px] border-blue-400

  '>
                            <span
                                className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Registro</span>
                        </div>


                    </li>
                    <li>
                      {/*  <a href="#" x-on:click="activeTab = 3"
                           className="inline-block px-4 py-2 bg-purple-500">Asistencias</a>*/}

                        <div className='button w-40 h-16 bg-blue-500  cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
    rounded-full  border-[1px] border-blue-400

  '>
                            <span x-on:click="activeTab = 3"
                                className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Asistencias</span>
                        </div>

                    </li>
                </ul>
                <div className="mt-6 bg-white border p-3">

                    {/*<div x-show="activeTab === 1" >*/}

                    <div x-show="activeTab === 1" x-transition:enter="transition ease-out duration-1000"
                         x-transition:enter-start="opacity-0 transform scale-90"
                         x-transition:enter-end="opacity-100 transform scale-100"
                         x-transition:leave="transition ease-in duration-1000"
                         x-transition:leave-start="opacity-100 transform scale-100"
                         x-transition:leave-end="opacity-0 transform scale-90"
                         className="rounded shadow-md text-center bg-gray-700 text-white">

                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">


                                        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Nombre</th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Edad</th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Cargo</th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Número de Celular</th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                            <tr className="hover:bg-gray-50">
                                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                                    <div className="relative h-10 w-10">
                                                        <img
                                                            className="h-full w-full rounded-full object-cover object-center"
                                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                        <span
                                                            className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                                    </div>
                                                    <div className="text-sm">
                                                        <div className="font-medium text-gray-700">Steven Jobs</div>
                                                        <div className="text-gray-400">C.C. 11927857962</div>
                                                    </div>
                                                </th>
                                                <td className="px-6 py-4">
          <span
              className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            20 Años
          </span>
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="flex gap-2">
            <span
                className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
              Design
            </span>
                                                        <span
                                                            className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                                                        >
              Product
            </span>
                                                        <span
                                                            className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                                        >
              Develop
            </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4">3146889568</td>

                                                <td className="px-6 py-4">
                                                    <div className="flex justify-end gap-4">
                                                        <a x-data="{ tooltip: 'Delete' }" href="#">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                className="h-6 w-6"
                                                                x-tooltip="tooltip"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                />
                                                            </svg>
                                                        </a>
                                                        <a x-data="{ tooltip: 'Edite' }" href="#">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                className="h-6 w-6"
                                                                x-tooltip="tooltip"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>




                                            </tbody>
                                        </table>



                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>



                    <div x-show="activeTab === 2"

                         x-transition:enter="transition ease-out duration-1000"
                         x-transition:enter-start="opacity-0 transform scale-90"
                         x-transition:enter-end="opacity-100 transform scale-100"
                         x-transition:leave="transition ease-in duration-1000"
                         x-transition:leave-start="opacity-100 transform scale-100"
                         x-transition:leave-end="opacity-0 transform scale-90"
                         className="rounded shadow-md text-center bg-gray-700 text-white"


                    >




                        <div class="bg-gray-200 w-full flex items-center justify-center">
                            <div class="w-full py-8">
                                <div class="flex items-center justify-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                                    </svg>
                                    <h1 class="text-3xl font-bold text-blue-600 tracking-wider">REGISTRO DE EMPLEADOS</h1>
                                </div>
                                <div class="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">

                                    {/*<h2 class="text-center text-2xl font-bold tracking-wide text-gray-800">Sign Up</h2>*/}
                                    {/*<p class="text-center text-sm text-gray-600 mt-2">Already have an account? <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</a></p>*/}

                                    <form class="my-8 text-sm relative w-full mt-6 space-y-8">

{/*                                        <div class="flex flex-col my-4">
                                            <label for="name" class="text-gray-700">Name</label>
                                            <input type="text" name="name" id="name" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your name"/>
                                        </div>

                                        <div className="flex flex-col my-4">
                                            <label htmlFor="name" className="text-gray-700">Name</label>
                                            <input type="text" name="name" id="name"
                                                   className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                                   placeholder="Enter your name"/>
                                        </div>*/}

                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Cedula
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                   placeholder="12345678"/>
                                        </div>

                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Nombres
                                                </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                   placeholder="John Deep"/>
                                        </div>


                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Apellidos
                                                </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                   placeholder="Jackson Ford"/>
                                        </div>


                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Edad
                                                </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                   placeholder="20"/>
                                        </div>


                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Cargo
                                                </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                   placeholder="Desarrollador de Software"/>
                                        </div>

                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Número de Celular
                                            </label>
                                            <input type="text"
                                                   className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                   placeholder="3144693578"/>
                                        </div>




                                     </form>

                        <div class="flex items-center justify-between">
                            <div class="w-full h-[1px] bg-gray-300"></div>
                            <span class="text-sm uppercase mx-6 text-gray-400"> o</span>
                            <div class="w-full h-[1px] bg-gray-300"></div>
                        </div>


                    </div>
                </div>
            </div>





                    </div>


                    <div x-show="activeTab === 3"

                         x-transition:enter="transition ease-out duration-1000"
                         x-transition:enter-start="opacity-0 transform scale-90"
                         x-transition:enter-end="opacity-100 transform scale-100"
                         x-transition:leave="transition ease-in duration-1000"
                         x-transition:leave-start="opacity-100 transform scale-100"
                         x-transition:leave-end="opacity-0 transform scale-90"
                         className="rounded shadow-md text-center bg-gray-700 text-white"

                    >Asistencias


                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">


                                        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Nombre</th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Edad</th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Cargo</th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Número de Celular</th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                            <tr className="hover:bg-gray-50">
                                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                                    <div className="relative h-10 w-10">
                                                        <img
                                                            className="h-full w-full rounded-full object-cover object-center"
                                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                        <span
                                                            className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                                    </div>
                                                    <div className="text-sm">
                                                        <div className="font-medium text-gray-700">Steven Jobs</div>
                                                        <div className="text-gray-400">C.C. 11927857962</div>
                                                    </div>
                                                </th>
                                                <td className="px-6 py-4">
          <span
              className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            20 Años
          </span>
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="flex gap-2">
            <span
                className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
              Design
            </span>
                                                        <span
                                                            className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                                                        >
              Product
            </span>
                                                        <span
                                                            className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                                        >
              Develop
            </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4">3146889568</td>

                                                <td className="px-6 py-4">
                                                    <div className="flex justify-end gap-4">
                                                        <a x-data="{ tooltip: 'Delete' }" href="#">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                className="h-6 w-6"
                                                                x-tooltip="tooltip"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                />
                                                            </svg>
                                                        </a>
                                                        <a x-data="{ tooltip: 'Edite' }" href="#">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                className="h-6 w-6"
                                                                x-tooltip="tooltip"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>




                                            </tbody>
                                        </table>



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
