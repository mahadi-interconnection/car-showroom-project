from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CarCreateView,ShowroomCreateView,CarDetailsView,ShowroomDetailsView

urlpatterns = {
    url(r'^carlists/$', CarCreateView.as_view(), name="create"),
    url(r'^showrooms/$', ShowroomCreateView.as_view(), name="create"),
    url(r'^carlists/(?P<pk>[0-9]+)/$',
        CarDetailsView.as_view(), name="details"),
    url(r'^showrooms/(?P<pk>[0-9]+)/$',
        ShowroomDetailsView.as_view(), name="details")    
}

urlpatterns = format_suffix_patterns(urlpatterns)

