<?php

namespace App\Http\Controllers;

use App\Models\Asistencia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AsistenciasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //  return Inertia::render('Asistencias/RegisterAsistencias');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Inertia::render('Asistencias/RegisterAsistencias');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        //Validación de reglas
/*        $empleado = new Asistencia();
        $validate = Validator::make($request->all(), $empleado->rules , $empleado->messages);

        if($validate->fails()){
            $response = response()-json(['success' => 'false', 'mensaje' => $validate->errors()->first()]);
        }else{
            Asistencia::create($request->all());
            $response = response()->json(['success' => 'true', 'mensaje' => 'Empleado registrado existosamente.']);
        }*/

        $asistencia = new Asistencia();
        $asistencia->cedula_empleado = $request->cedulaAsistente;
        $asistencia->fecha_asistencia_entrada = $request->fecha_hora_ingreso;
        $asistencia->fecha_asistencia_salida = $request->fecha_hora_salida;
        $asistencia->save();
        $response = response()->json(['success' => 'true', 'mensaje' => 'Empleado registrado existosamente.']);



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
