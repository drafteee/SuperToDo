from django.contrib import admin

# Register your models here.
from .models import DictionaryPair, Calculator, Language


class DictionaryAdmin(admin.ModelAdmin):

    search_fields = ['fromL', 'rus', 'language_name']
    #fields = (('eng', 'rus'), 'language')
    list_display = ('fromL', 'rus', 'language_name')
    list_filter = ('language', )
    fieldsets = (
        ('Required Information', {
            'description': "These fields are required for each event.",
            'fields': ('language', 'fromL', 'rus', )
        }),
    )

    def language_name(self, obj):
        return obj.language.name

    language_name.short_description = 'Language'
    language_name.admin_order_field = 'language_name'

    class Meta:
        model = DictionaryPair


class DictionaryPairInstanceInline(admin.TabularInline):
    model = DictionaryPair


class CalculatorAdmin(admin.ModelAdmin):
    search_fields = ['amount', 'date']

    class Meta:
        model = Calculator


class LanguageAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_filter = ('name', )
    fields = ('name', )
    list_display = ('name', )
    inlines = [DictionaryPairInstanceInline]

    class Meta:
        model = Language


admin.site.register(Calculator, CalculatorAdmin)
admin.site.register(Language, LanguageAdmin)
admin.site.register(DictionaryPair, DictionaryAdmin)
