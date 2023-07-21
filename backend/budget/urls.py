from django.urls import path
from .views import filter_view

urlpatterns = [
    path('filter_entries/', filter_view)
]