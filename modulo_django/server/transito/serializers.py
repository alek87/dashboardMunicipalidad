from rest_framework import serializers
from transito.models import Infraccion
from rest_framework.serializers import ModelSerializer

#crear Infraccion.
class InfraccionCreateSerializer(ModelSerializer):
    class Meta:
        model = Infraccion
        fields = '__all__'


#lista de videos
class InfraccionListSerializer(ModelSerializer):
	class Meta:
		model = Infraccion
		fields = [ 'fecha', 'nro_alta', 'clase_vehiculo','descripcion', ]


#detalle del video
class InfraccionDetailSerializer(ModelSerializer):

	class Meta:
		model = Infraccion
		fields = [ 'inspector', 'infractor', 'dominio',]
