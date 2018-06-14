<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Presupuesto extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'Nombre' => $this->Nombre,
            'Monto' => $this->Monto,
        ];
    }
}
