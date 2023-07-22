from budget.models import Entry

class Filters:
    """Class to filter Expense queryset based on request parameters"""
    def __init__(self, entries, start_date, end_date, category, min_amount, 
        max_amount):
        self.entries = entries
        self.start_date = start_date[0]
        self.end_date = end_date[0]
        self.category = category[0]
        self.min_amount = min_amount[0]
        self.max_amount = max_amount[0]
        self.data = entries
        
    def filter(self):
        """Filters entries based on parameters given"""
        self.filter_start_date()
        self.filter_end_date()
        self.filter_category()
        self.filter_min_amount()
        self.filter_max_amount()

    def filter_start_date(self):
        """Filters entries by start date"""
        if self.start_date:
            self.data = self.data.filter(date__gte=self.start_date)

    def filter_end_date(self):
        """Filters entries for end date"""
        pass

    def filter_category(self):
        """Filters entries for category"""
        if self.category:
            self.data = self.data.filter(category=self.category)
            print(self.data)

    def filter_min_amount(self):
        """Filters for xxx"""
        pass

    def filter_max_amount(self):
        """Filters for xxx"""
        pass

