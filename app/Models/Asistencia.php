<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asistencia extends Model
{
    //use HasFactory;
    protected $table = 'asistencia';
    public $timestamps = false;

    protected $fillable = [
        "cedula_empleado",
        "fecha_asistencia_entrada",
        "fecha_asistencia_salida"
    ];

    public $rules = [
        "cedula_empleado" => 'required|numeric',
        "fecha_asistencia_entrada" => 'required',
        "fecha_asistencia_salida" => 'required',
    ];

    public $messages = [
        'cedula_empleado.required' => 'Debe ingresar la cedula del empleado',
        'fecha_asistencia_entrada.required' => 'Debe ingresar los nombres del empleado',
        'fecha_asistencia_salida.required' => 'Debe ingresar los nombres del empleado',
    ];
}
