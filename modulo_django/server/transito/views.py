from django.contrib.auth.models import User
from rest_framework import generics
from .models import Infraccion

from rest_framework.generics import (
	ListAPIView,
	RetrieveAPIView,
	RetrieveUpdateAPIView,
	UpdateAPIView,
	DestroyAPIView,
	CreateAPIView
	)

from rest_framework.permissions import (
	AllowAny,
	IsAuthenticated,
	)

from .serializers import (
	InfraccionCreateSerializer,
	InfraccionListSerializer,
	InfraccionDetailSerializer
	)

from braces.views import CsrfExemptMixin
from rest_framework.permissions import IsAuthenticated


class InfraccionListAPIView(ListAPIView):
	queryset = Infraccion.objects.all().order_by('-nro_alta')
	serializer_class = InfraccionListSerializer
	permission_classes = [AllowAny]


class InfraccionCreateAPIView(CsrfExemptMixin, CreateAPIView):
	authentication_classes = []
	queryset = Infraccion.objects.all()
	serializer_class = InfraccionCreateSerializer
	#permission_classes = [IsAuthenticated]


class InfraccionDetailAPIView(RetrieveAPIView):
	queryset = Infraccion.objects.all()
	serializer_class = InfraccionDetailSerializer
	lookup_field = 'nro_alta'
	permission_classes = [AllowAny]


class InfraccionUpdateAPIView(CsrfExemptMixin, RetrieveUpdateAPIView):
	authentication_classes = []
	queryset = Infraccion.objects.all()
	serializer_class = InfraccionCreateSerializer
	lookup_field = 'nro_alta'


class InfraccionDeleteAPIView(CsrfExemptMixin, DestroyAPIView):
	authentication_classes = []
	queryset = Infraccion.objects.all()
	serializer_class = InfraccionDetailSerializer
	lookup_field = 'nro_alta'


'''
**************************************

from rest_framework import viewsets
from transito.models import Infraccion
from transito.serializers import InfraccionSerializer


class InfraccionViewSet(viewsets.ModelViewSet):
    queryset = Infraccion.objects.all()
    serializer_class = InfraccionSerializer


'''
