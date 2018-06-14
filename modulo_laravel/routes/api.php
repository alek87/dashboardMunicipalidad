<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/api/ver', function () {
   return ['status'=>'success'];
})->middleware('cors');

//Route::get('/obtener/{id}', 'PresupuestoController@test');
Route::get('/ver', 'PresupuestoController@index');
Route::get('/obtener/{presupuesto}', 'PresupuestoController@show');
Route::post('/crear', 'PresupuestoController@store');
Route::put('/actualizar/{presupuesto}', 'PresupuestoController@update');
Route::delete('/borrar/{presupuesto}', 'PresupuestoController@delete');