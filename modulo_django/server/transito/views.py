from rest_framework import viewsets
from transito.models import Infraccion
from transito.serializers import InfraccionSerializer


class InfraccionViewSet(viewsets.ModelViewSet):
    queryset = Infraccion.objects.all()
    serializer_class = InfraccionSerializer
