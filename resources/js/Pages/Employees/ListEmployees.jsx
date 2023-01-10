import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import PrimaryButton from "@/components/PrimaryButton";
import InputError from "@/components/InputError";
import { TiCalendarOutline } from "react-icons/ti";
import '/resources/css/modalEdit.css';

export default function ListEmployees(props) {

    console.log(props.empleados);
    console.log(props.asistencias);



    const {data, setData, post, processing, errors, reset} = useForm({
        cedula: '',
        nombres: '',
        apellidos: '',
        edad: '',
        cargo: '',
        no_celular: '',
    });


    const modalClose = (modal) => {
        const modalToClose = document.querySelector('.'+modal);
        modalToClose.classList.remove('fadeIn');
        modalToClose.classList.add('fadeOut');
        setTimeout(() => {
            modalToClose.style.display = 'none';
        }, 500);
    }

    const openModal = (modal,dataEmpleado) => {
        const modalToOpen = document.querySelector('.'+modal);
        modalToOpen.classList.remove('fadeOut');
        modalToOpen.classList.add('fadeIn');
        modalToOpen.style.display = 'flex';

        console.log(dataEmpleado)


        if (modal==='another-modal'){
            let formCedulaEdit = document.getElementById('formCedulaEdit');
            let formNombresEdit = document.getElementById('formNombresEdit');
            let formApellidosEdit = document.getElementById('formApellidosEdit');
            let formEdadEdit = document.getElementById('formEdadEdit');
            let formCargoEdit = document.getElementById('formCargoEdit');
            let formNumeroCelularEdit = document.getElementById('formNumeroCelularEdit');

            formCedulaEdit.value = dataEmpleado.cedula;
            formNombresEdit.value = dataEmpleado.nombres;
            formApellidosEdit.value = dataEmpleado.apellidos;
            formEdadEdit.value = dataEmpleado.edad;
            formCargoEdit.value = dataEmpleado.cargo;
            formNumeroCelularEdit.value = dataEmpleado.no_celular;
        }


        else if (modal==='main-modal'){
            document.getElementById('cedulaAsistente').value = dataEmpleado.cedula;
        }


    }



        const submitEditEmployee = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('cedula', document.getElementById('formCedulaEdit').value);
        formData.append('nombres', document.getElementById('formNombresEdit').value);
        formData.append('apellidos', document.getElementById('formApellidosEdit').value);
        formData.append('edad', document.getElementById('formEdadEdit').value);
        formData.append('cargo', document.getElementById('formCargoEdit').value);
        formData.append('no_celular', document.getElementById('formNumeroCelularEdit').value);

        console.log(formData)

            axios
                .post(route('employee.update'),formData)
                .then(response => {
                    return response;
                })
                .then(json => {
                    console.log(json)
                })
                .catch(error => {
                    console.log(error);
                });


    };






    const onHandleChange = (event) => {
        console.log(event.target);
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submitRegisterEmployee = (e) => {
        e.preventDefault();


        const form = document.forms.namedItem("fileinfo");
        const formData = new FormData(form);
        axios
            .post(route('empleados.store'),formData)
            .then(response => {
                    return response;
                })
            .then(json => {
                    console.log(json)
            })
            .catch(error => {
                console.log(error);
            });
    };


    const submitRegisterAsistencia = (e) => {
        e.preventDefault();


        const form = document.forms.namedItem("registro_asistencia_empleado");
        const formData = new FormData(form);
        axios
            .post(route('asistencias.store'),formData)
            .then(response => {
                return response;
            })
            .then(json => {
                console.log(json)
            })
            .catch(error => {
                console.log(error);
            });
    };


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"></h2>}
        >
            <Head title="Dashboard"/>


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


                                        <table
                                            className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Nombre
                                                </th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Edad
                                                </th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Cargo
                                                </th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Número
                                                    de Celular
                                                </th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">



                                            {props.empleados.map((element, index) =>{
                                                return (
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
                                                                <div
                                                                    className="font-medium text-gray-700">{element.nombres + ' ' + element.apellidos}</div>
                                                                <div
                                                                    className="text-gray-400">C.C. {element.cedula}</div>
                                                            </div>
                                                        </th>

                                                        <td className="px-6 py-4">
                                                      <span
                                                          className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                                      >
                                                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                                          {element.edad} Años
                                                      </span>
                                                        </td>


                                                        <td className="px-6 py-4">

                                                            <div className="flex gap-2">
{/*                                                            <span
                                                                className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                                                            >
                                                              Design
                                                            </span>
                                                                <span
                                                                    className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                                                                >
                                                              Product
                                                            </span>*/}
                                                                <span
                                                                    className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                                                >
                                                              {element.cargo}
                                                            </span>
                                                            </div>
                                                        </td>

                                                        <td className="px-6 py-4">{element.no_celular}</td>

                                                        <td className="px-6 py-4">
                                                            <div className="flex justify-end gap-4">


{/*                                                                <button x-data="{ tooltip: 'Delete' }" >
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
                                                                </button>*/}


                                                                <button x-data="{ tooltip: 'Edite' }" onClick={()=>openModal('another-modal',props.empleados[index])} >

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
                                                                </button>


                                                                <button x-data="{ tooltip: 'Edite' }" onClick={()=>openModal('main-modal',props.empleados[index])}>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke-width="1.5"
                                                                        stroke="currentColor"
                                                                        className="h-6 w-6"
                                                                        x-tooltip="tooltip"
                                                                    >
                                                                    <TiCalendarOutline style={{ fontSize: 26 }}/>

                                                                    </svg>

                                                                </button>


                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}




                                            </tbody>
                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div x-show="activeTab === 2" x-transition:enter="transition ease-out duration-1000"
                         x-transition:enter-start="opacity-0 transform scale-90"
                         x-transition:enter-end="opacity-100 transform scale-100"
                         x-transition:leave="transition ease-in duration-1000"
                         x-transition:leave-start="opacity-100 transform scale-100"
                         x-transition:leave-end="opacity-0 transform scale-90"
                         className="rounded shadow-md text-center bg-gray-700 text-white">

                        <div className="bg-gray-200 w-full flex items-center justify-center">
                            <div className="w-full py-8">
                                <div className="flex items-center justify-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-600" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                                    </svg>
                                    <h1 className="text-3xl font-bold text-blue-600 tracking-wider">REGISTRO DE
                                        EMPLEADOS</h1>
                                </div>
                                <div
                                    className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">

                                    {/*<h2 class="text-center text-2xl font-bold tracking-wide text-gray-800">Sign Up</h2>*/}
                                    {/*<p class="text-center text-sm text-gray-600 mt-2">Already have an account? <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</a></p>*/}

                                    <form className="my-8 text-sm relative w-full mt-6 space-y-8"
                                          onSubmit={submitRegisterEmployee}
                                          name="fileinfo">

                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Cedula
                                            </label>
                                            <input
                                                type="number"
                                                onChange={onHandleChange}
                                                id="cedula"
                                                name="cedula"
                                                value={data.cedula}
                                                className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                placeholder="12345678"
                                                required={true}/>
                                            <InputError message={errors.cedula} className="mt-2" />
                                        </div>

                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Nombres
                                            </label>
                                            <input
                                                type="text"
                                                onChange={onHandleChange}
                                                id="nombres"
                                                name="nombres"
                                                value={data.nombres}
                                                className="block w-full px-4 py-4 mt-2 text-base text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                placeholder="John Deep"
                                                required={true}/>
                                        </div>


                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Apellidos
                                            </label>
                                            <input
                                                type="text"
                                                onChange={onHandleChange}
                                                id="apellidos"
                                                name="apellidos"
                                                value={data.apellidos}
                                                className="block w-full px-4 py-4 mt-2 text-base text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                placeholder="Jackson Ford"
                                                required={true}/>
                                        </div>


                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Edad
                                            </label>
                                            <input
                                                type="number"
                                                onChange={onHandleChange}
                                                id="edad"
                                                name="edad"
                                                value={data.edad}
                                                className="block w-full px-4 py-4 mt-2 text-base text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                placeholder="20"
                                                required={true}/>
                                        </div>

                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Cargo
                                            </label>
                                            <input
                                                type="text"
                                                onChange={onHandleChange}
                                                id="cargo"
                                                name="cargo"
                                                value={data.cargo}
                                                className="block w-full px-4 py-4 mt-2 text-base text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                placeholder="Desarrollador de Software"
                                                required={true}/>
                                        </div>

                                        <div className="relative">
                                            <label
                                                className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Número
                                                de Celular
                                            </label>
                                            <input
                                                type="number"
                                                onChange={onHandleChange}
                                                id="no_celular"
                                                name="no_celular"
                                                value={data.no_celular}
                                                className="block w-full px-4 py-4 mt-2 text-base text-black placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                                placeholder="3144693578"
                                                required={true}/>
                                        </div>

                                        <div className="flex items-center justify-center mt-4">
                                            <PrimaryButton className="ml-4" processing={processing}>
                                                Registrar Empleado
                                            </PrimaryButton>
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


                    <div x-show="activeTab === 3" x-transition:enter="transition ease-out duration-1000"
                         x-transition:enter-start="opacity-0 transform scale-90"
                         x-transition:enter-end="opacity-100 transform scale-100"
                         x-transition:leave="transition ease-in duration-1000"
                         x-transition:leave-start="opacity-100 transform scale-100"
                         x-transition:leave-end="opacity-0 transform scale-90"
                         className="rounded shadow-md text-center bg-gray-700 text-white"> Asistencias
                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 text-gray-900">


                                        <table
                                            className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Empleado
                                                </th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Fecha y Hora de Ingreso
                                                </th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Fecha y Hora de Salida
                                                </th>
                                                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 border-t border-gray-100">


                                            {props.asistencias.map((element, index) =>{

                                                return (<tr className="hover:bg-gray-50">
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
                                                            <div className="font-medium text-gray-700"></div>
                                                            <div className="text-gray-400">C.C. {element.cedula_empleado}</div>
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        <div className="flex gap-2">

                                                    <span
                                                        className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                                    >
                                                      {element.fecha_asistencia_entrada}
                                                    </span>
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        <div className="flex gap-2">

                                                    <span
                                                        className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                                                    >
                                                      {element.fecha_asistencia_salida}
                                                    </span>
                                                        </div>
                                                    </td>



                                                    <td className="px-6 py-4">
                                                        <div className="flex justify-end gap-4">
                                                            {/*                                                        <a x-data="{ tooltip: 'Delete' }" href="#">
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
                                                        </a>*/}
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
                                                </tr>)








                                            })}




                                            </tbody>
                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/*            <div>
                <button onClick={()=>openModal('another-modal')}
                        className='mt-5 bg-blue-500 text-white p-2 rounded text-2xl font-bold'>Open Another Modal
                </button>
            </div>

            <div>
                <button onClick={()=>openModal('main-modal')}
                        className='bg-blue-500 text-white p-2 rounded text-2xl font-bold'>Open Modal
                </button>
            </div>*/}


            <div
                className="another-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
                style={{ display: 'none' }}>
                <div
                    className="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">

                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold text-gray-500">Editar Empleado</p>
                            <div className="modal-close cursor-pointer z-50" onClick={()=>modalClose('another-modal')}>
                                <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                     width="18" height="18"
                                     viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg>
                            </div>
                        </div>

                        <div className="my-5 mr-5 ml-5 flex justify-center">
                            <form
                                 className="w-full" onSubmit={submitEditEmployee}>
                                <div className="">
                                    <div className="">
                                        <label htmlFor="names" className="text-md text-gray-600">Cedula</label>
                                    </div>
                                    <div className="">
                                        <input type="number" id="formCedulaEdit" autoComplete="off" name="formCedulaEdit"
                                               className="h-3 p-3 w-full border-2 border-gray-300 mb-2 rounded-md"
                                               placeholder="Example. John Doe"/>
                                    </div>
                                    <div className="">
                                        <label htmlFor="phone" className="text-md text-gray-600">Nombres</label>
                                    </div>
                                    <div className="">
                                        <input type="text" id="formNombresEdit" autoComplete="off" name="formNombresEdit"
                                               className="h-3 p-3 w-full border-2 border-gray-300 mb-2 rounded-md"
                                               placeholder="Example. 0729400426"/>
                                    </div>
                                    <div className="">
                                        <label htmlFor="id_number" className="text-md text-gray-600">Apellidos</label>
                                    </div>
                                    <div className="">
                                        <input type="text" id="formApellidosEdit" autoComplete="off" name="formApellidosEdit"
                                               className="h-3 p-3 w-full border-2 border-gray-300 mb-2 rounded-md"
                                               placeholder="Caretaker's ID number"/>
                                    </div>

                                    <div className="">
                                        <label htmlFor="id_number" className="text-md text-gray-600">Edad</label>
                                    </div>
                                    <div className="">
                                        <input type="number" id="formEdadEdit" autoComplete="off" name="formEdadEdit"
                                               className="h-1 p-3 w-full border-2 border-gray-300 mb-2 rounded-md"
                                               placeholder="Caretaker's ID number"/>
                                    </div>

                                    <div className="">
                                        <label htmlFor="id_number" className="text-md text-gray-600">Cargo</label>
                                    </div>
                                    <div className="">
                                        <input type="text" id="formCargoEdit" autoComplete="off" name="formCargoEdit"
                                               className="h-3 p-3 w-full border-2 border-gray-300 mb-2 rounded-md"
                                               placeholder="Caretaker's ID number"/>
                                    </div>

                                    <div className="">
                                        <label htmlFor="id_number" className="text-md text-gray-600">Número de Celular</label>
                                    </div>
                                    <div className="">
                                        <input type="number" id="formNumeroCelularEdit" autoComplete="off" name="formNumeroCelularEdit"
                                               className="h-3 p-3 w-full border-2 border-gray-300 mb-2 rounded-md"
                                               placeholder="Caretaker's ID number"/>
                                    </div>



                                </div>


                                <div className="flex justify-end pt-2 space-x-14">
                                    <button
                                        className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400 " processing={processing} type='submit'
                                    >Confirmar
                                    </button>

{/*                                    <PrimaryButton className="ml-4" processing={processing} type='submit'>
                                        Registrar Empleado
                                    </PrimaryButton>*/}

                                    <button
                                        className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                                        onClick={()=>modalClose('another-modal')}>Cancelar
                                    </button>

                                </div>


                            </form>
                        </div>


                    </div>
                </div>
            </div>


            <div
                className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
                style={{ display: 'none' }}>
            >
                <div
                    className="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">

                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold text-gray-500">Registrar Asistencia</p>
                            <div className="modal-close cursor-pointer z-50" onClick={()=>modalClose('main-modal')}>
                                <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg"
                                     width="18" height="18"
                                     viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg>
                            </div>
                        </div>

                        <div className="my-5 mr-5 ml-5 flex justify-center">
                            <form id="registro_asistencia_empleado"
                                  name="registro_asistencia_empleado"
                                  className="w-full"
                                  onSubmit={submitRegisterAsistencia} >
                                <div className="">


                                    <div className="">
                                        <label htmlFor="id_number" className="text-md text-gray-600">Cedula</label>
                                    </div>
                                    <div className="">
                                        <input type="number" id="cedulaAsistente" autoComplete="off" name="cedulaAsistente"
                                               className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                        />
                                    </div>

                                    <div className="">
                                        <label htmlFor="names" className="text-md text-gray-600">Fecha y Hora de Ingreso</label>
                                    </div>
                                    <div className="">
                                        <input type="datetime-local" id="fecha_hora_ingreso" autoComplete="off" name="fecha_hora_ingreso"
                                               className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                        />
                                    </div>
                                    <div className="">
                                        <label htmlFor="phone" className="text-md text-gray-600">Fecha y Hora de Salida</label>
                                    </div>
                                    <div className="">
                                        <input type="datetime-local" id="fecha_hora_salida" autoComplete="off" name="fecha_hora_salida"
                                               className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end pt-2 space-x-14">
                                    <button
                                        className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                                        onClick={()=>modalClose('main-modal')}>Cancelar
                                    </button>
                                    <button type='submit'
                                            className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                                            processing={processing}
                                    >Confirmar
                                    </button>

                                </div>


                            </form>
                        </div>


                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
