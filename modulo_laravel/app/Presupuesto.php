<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Presupuesto extends Model
{
    
    protected $table = 'presupuesto';
    protected $fillable = ['Nombre', 'Monto'];
    public $timestamps = false;


}
