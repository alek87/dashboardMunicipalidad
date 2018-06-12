from rest_framework import serializers
from transito.models import Infraccion


class InfraccionSerializer(serializers.ModelSerializer):
    """ Serializer to represent the Infraccion model """
    class Meta:
        model = Infraccion
        fields = '__all__'
