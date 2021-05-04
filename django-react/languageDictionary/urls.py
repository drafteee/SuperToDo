from django.urls import path

from .views import list_view, pair_create_view

urlpatterns = [
    path('', list_view),
    path('<int:page>/<int:pageSize>/', list_view),
    path('create/', pair_create_view),
    # path('api/', include(router.urls))
]
