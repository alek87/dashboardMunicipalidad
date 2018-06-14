<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Presupuesto;
use App\Http\Resources\Presupuesto as PresupuestoResource;

class PresupuestoController extends Controller
{
    //

    public function test($id)
    {
        return new PresupuestoResource(Presupuesto::find($id));
    }

    public function index()
    {
        //return new PresupuestoResource(Presupuesto::all());
        return Presupuesto::all();
    }
 
    public function show(Presupuesto $presupuesto)
    {
        return $presupuesto;
    }

    public function store(Request $request)
    {
        $presupuesto = Presupuesto::create($request->all());
        return response()->json($presupuesto, 201);
    }

    public function update(Request $request, Presupuesto $presupuesto)
    {
        $presupuesto->update($request->all());

        return response()->json($presupuesto, 200);
    }

    public function delete(Presupuesto $presupuesto)
    {
        $presupuesto->delete();

        return response()->json(null, 204);
    }
}
