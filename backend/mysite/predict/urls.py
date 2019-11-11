from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_form, name='post_form'),
    path('predict', views.post_predict, name='predict'),
    path('predict2', views.post_predict2, name='predict2'),
]
