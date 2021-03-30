from django import forms

from .models import DictionaryPair


class DictionaryPairForm(forms.ModelForm):
    # rus = forms.CharField()
    # eng = forms.CharField()

    class Meta:
        model = DictionaryPair
        fields = ['rus', 'fromL']

    def clean_content(self):
        rus = self.clean_content.get('rus')
        fromL = self.clean_content.get('fromL')
