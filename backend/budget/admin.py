from django.contrib import admin
from .models import Category, Entry, BudgetItem

# Register your models here.

admin.site.register(Category)
admin.site.register(Entry)
admin.site.register(BudgetItem)