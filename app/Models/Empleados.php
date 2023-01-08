<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleados extends Model
{
    //use HasFactory;
    protected $table = 'empleados';
    protected $primaryKey = 'cedula';
    protected $fillable = [
        "cedula",
        "nombres",
        "apellidos",
        "edad",
        "cargo",
        "no_celular",
    ];

    public $rules = [
        "cedula" => 'required|unique|numeric',
        "nombres" => 'required',
        "apellidos" => 'required',
        "edad" => 'required',
        "cargo" => 'required',
        "no_celular" => 'required|numeric'
    ];

    public $messages = [
        'cedula.required' => 'Debe ingresar la cedula del empleado',
        'nombres.required' => 'Debe ingresar los nombres del empleado',
        'apellidos.required' => 'Debe ingresar los apellidos del empleado',
        'edad.required' => 'Debe ingresar una edad',
        'cargo.required' => 'Debe ingresar un cargo',
        'no_celular.required' => 'Debe ingresar un número de celular',
  ];

}
