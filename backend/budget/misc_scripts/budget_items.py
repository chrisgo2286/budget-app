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
            item_data['id'] = budget_item.id
            item_data['budget'] = float(budget_item.amount)
            item_data['category'] = budget_item.category.name
            item_data['category_id'] = budget_item.category.id
            item_data['actual'] = self.calc_actual(budget_item.category)
            fraction = float(item_data['actual'] / item_data['budget'])
            item_data['percent'] = f'{round(fraction * 100,4)}%'
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
            sum_dict = entries.aggregate(Sum('amount'))
            actual = sum_dict['amount__sum']
            return float(actual)
        return 0
        