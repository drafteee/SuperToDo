from django.contrib import admin

# Register your models here.
from .models.Todo import Todo  # add this
from .models.Dictionary import Dictionary  # add this


class TodoAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'description', 'completed')  # add this


class DictionaryAdmin(admin.ModelAdmin):  # add this
    list_display = ('rus', 'eng')  # add this


# Register your models here.
admin.site.register(Todo, TodoAdmin)  # add this
admin.site.register(Dictionary, DictionaryAdmin)  # add this
