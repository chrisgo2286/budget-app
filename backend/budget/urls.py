from django.urls import path
from .views import filter_view, budget_view

urlpatterns = [
    path('filter_entries/', filter_view),
    path('budget_items/', budget_view),
]