from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CategorySerializer, EntrySerializer
from .models import Category, Entry
from .misc_scripts.filters import Filters
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User

# Create your views here.

class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)

class EntryView(viewsets.ModelViewSet):
    serializer_class = EntrySerializer
    queryset = Entry.objects.all()

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def get_queryset(self):
        entries = self.queryset.filter(owner=self.request.user)
        filters = Filters(entries, **self.request.query_params)
        filters.filter()
        return filters.data

@api_view(('GET',))
def filter_view(request):
    user = User.objects.get(id=request.user.id)
    filters = Filters(user, request.query_params)
    filters.filter()
    return Response(filters.data)
