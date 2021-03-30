from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from .models import DictionaryPair
# Create your views here.

from .forms import DictionaryPairForm
from .serializers import DictionaryPairSerializer


def list_view_pure(request, *args, **kwargs):
    qs = DictionaryPair.objects.all()
    print(qs)
    words = [{"id": x.id, "rus": x.rus, "eng": x.eng} for x in qs]
    data = {
        "response": words
    }

    return JsonResponse(data)


@api_view(['GET'])
def pair_detail(request, pairId, *args, **kwargs):
    qs = DictionaryPair.objects.filter(id=pairId)
    if not qs.exists():
        Response({}, status=404)

    obj = qs.first()
    serializer = DictionaryPairSerializer(obj)

    return Response(serializer.data)


@api_view(['GET'])
def list_view(request, *args, **kwargs):
    qs = DictionaryPair.objects.all()
    serializer = DictionaryPairSerializer(qs, many=True)

    return Response(serializer.data)


@api_view(['POST'])
# @authentication_classes([SessionAuthentication, MyCustomAuth])
# @permission_classes([IsAuthenticated])
def pair_create_view(request, *args, **kwargs):
    serializer = DictionaryPairSerializer(data=request.POST)
    print(serializer.is_valid(raise_exception=True), request.POST)

    if serializer.is_valid(raise_exception=True):
        # serializer.save()
        return Response(serializer.data, status=201)

    return Response({}, status=400)
