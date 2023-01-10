<?php

namespace App\Http\Controllers;

use App\Models\Asistencia;
use App\Models\Empleados;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Exception;
use function PHPUnit\Framework\isNull;

class EmpleadosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        //
        $asistencias = Asistencia::orderBy('fecha_asistencia_entrada','DESC')->get();
        $empleados = Empleados::orderBy('nombres','DESC')->get();
        return Inertia::render('Employees/ListEmployees',['empleados' => $empleados,'asistencias' => $asistencias]);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Inertia::render('Employees/RegisterEmployee');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //Validación de reglas
        $empleado = new Empleados();
        $validate = Validator::make($request->all(), $empleado->rules , $empleado->messages);

        if($validate->fails()){
            $response = response()-json(['success' => 'false', 'mensaje' => $validate->errors()->first()]);
        }else{
            Empleados::create($request->all());
            $response = response()->json(['success' => 'true', 'mensaje' => 'Empleado registrado existosamente.']);
        }

        return ($response);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function validarExistenciaEmpleado(Request $request)
    {
        //
        $empleado = Empleados::find($request->cedulaEmpleadoRegistroAsistencia);

        if ($empleado===NULL){
            return response()->json(['success'=>false]);
        }else{
            return response()->json(['success'=>true,'empleado'=>$empleado]);
        }


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //




    }
    public function updateEmployee(Request $request){

        //Validación de reglas
        $empleado = new Empleados();
/*        $validate = Validator::make($request->all(), $empleado->rules , $empleado->messages);

        if($validate->fails()){
            $response = response()->json(['success' => 'false', 'mensaje' => $validate->errors()->first()]);
        }else{
            Empleados::update($request->all());
            $response = response()->json(['success' => 'true', 'mensaje' => 'Empleado registrado existosamente.']);
        }*/

        //$empleado->update($request->cedula,$request->all());

        Empleados::Where(['cedula'=>$request->cedula])->update($request->all());

        $response = response()->json(['success' => 'true', 'mensaje' => 'Empleado registrado existosamente.']);

        return ($response);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
