from django.shortcuts import render
from django.http import JsonResponse

from .engin.knn2 import *
# Create your views here.

def post_form(request):
    return render(request, 'post_form.html', {})

def post_predict(request):
    brand = request.GET.get('brand', '')
    colour = request.GET.get('colour', '')
    condition = request.GET.get('condition', '')
    contract = request.GET.get('contract', '')
    memory = request.GET.get('memory', '')
    mobos = request.GET.get('mobos', '')
    model = request.GET.get('model', '')
    res, nn = predict(brand, colour, condition, contract, memory, mobos, model)
    return JsonResponse({'predict':'{}'.format(res), 'nn':'{}'.format(str(nn))})  
#    return JsonResponse({'predict':'{}'.format('ok')})

def post_predict2(request):
    brand = request.GET.get('brand', '')
    colour = request.GET.get('colour', '')
    condition = request.GET.get('condition', '')
    contract = request.GET.get('contract', '')
    memory = request.GET.get('memory', '')
    mobos = request.GET.get('mobos', '')
    model = request.GET.get('model', '')
    res, nn = predict2(brand, colour, condition, contract, memory, mobos, model)
    return JsonResponse({'predict':'{}'.format(res), 'nn':'{}'.format(str(nn))})
                            
