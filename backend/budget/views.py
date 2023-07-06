from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CategorySerializer, EntrySerializer
from .models import Category, Entry

# Create your views here.

class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class EntryView(viewsets.ModelViewSet):
    serializer_class = EntrySerializer
    queryset = Entry.objects.all()
