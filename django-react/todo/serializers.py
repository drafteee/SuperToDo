from rest_framework import serializers
from .models import Dictionary
from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo.Todo
        fields = ('id', 'title', 'description', 'completed')


class DictionarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Dictionary.Dictionary
        fields = ('id', 'rus', 'eng')
