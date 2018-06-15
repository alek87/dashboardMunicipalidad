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


Route::get('/presupuestos', ['middleware' => 'cors','uses' => 'PresupuestoController@index']);
Route::get('/presupuestos/{presupuesto}', ['middleware' => 'cors','uses' => 'PresupuestoController@show']);
Route::post('/presupuestos', ['middleware' => 'cors','uses' => 'PresupuestoController@store']);
Route::put('/presupuestos/{presupuesto}', ['middleware' => 'cors','uses' => 'PresupuestoController@update']);
Route::delete('/presupuestos/{presupuesto}', ['middleware' => 'cors','uses' => 'PresupuestoController@delete']);


