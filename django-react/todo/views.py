from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import TodoSerializer      # add this
from .serializers import DictionarySerializer      # add this
import todo.models as Models                    # add this


class TodoView(viewsets.ModelViewSet):       # add this
    serializer_class = TodoSerializer          # add this
    queryset = Models.Todo.Todo.objects.all()


class DictionaryView(viewsets.ModelViewSet):       # add this
    serializer_class = DictionarySerializer          # add this
    queryset = Models.Dictionary.Dictionary.objects.all()
