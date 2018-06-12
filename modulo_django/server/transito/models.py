# -*- coding: utf-8 -*-
from django.db import models
from django.utils.timezone import now
from .choices import *

class Infraccion(models.Model):
    nro_alta = models.BigIntegerField(primary_key=True)
    fecha = models.DateField(default=now)
    inspector = models.CharField(max_length=50)
    infractor = models.CharField(max_length=50)
    dominio = models.CharField(max_length=15)
    descripcion = models.CharField(max_length=50)
    clase_vehiculo = models.CharField(max_length=50, choices=ClasesVehiculos)

    def __str__(self):
        return "Infracción n°: %s" % (self.nro_alta)
