from budget.models import Entry

class Filters:
    """Class to filter Expense queryset based on request parameters"""
    def __init__(self, user, params):
        self.entries = Entry.objects.filter(owner=user)
        self.params = params
        self.data = []
        
    def filter(self):
        """Filters entries based on parameters given"""
        print(self.params)