from django.db.models import Sum
from budget.models import BudgetItem
from budget.models import Entry

class BudgetItems:
    """Class to return data required for Budget Page"""
    def __init__(self, owner, month, year):
        self.budget_items = BudgetItem.objects.filter(owner=owner)
        self.month = month
        self.year = year
        self.data = []

    def compile(self):
        """Compiles data and populates data list"""
        for budget_item in self.budget_items:
            item_data = {}
            item_data['Budget'] = budget_item.amount
            item_data['Category'] = budget_item.category.name
            item_data['Actual'] = self.calc_actual(budget_item.category)
            item_data['Percent'] = item_data['Actual'] / item_data['Budget']
            self.data.append(item_data)

    def calc_actual(self, category):
        """Returns the actual amount entered for given category"""
        budget_items = BudgetItem.objects.filter(category=category)
        entries = Entry.objects.filter(
            category=category, 
            date__month=self.month, 
            date__year=self.year
        )
        if entries:
            return entries.aggregate(Sum('amount'))['amount__sum']
        return 0