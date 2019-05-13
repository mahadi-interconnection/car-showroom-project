from django.db import models

# Create your models here.

transmission_choices = [
("Manual","Manual"),
("Automatic","Automatic")
]


class ShowRoom(models.Model):
    name = models.CharField(max_length = 100)
    logo = models.CharField(max_length = 3550)
        

class Car(models.Model):
    image = models.ImageField(upload_to='all_image',blank= 'True')
    manufactor = models.CharField(max_length = 100)
    tagline = models.CharField(max_length = 100)
    model = models.CharField(max_length = 50)
    mileage = models.FloatField()
    year = models.IntegerField()
    status = models.BooleanField()
    transmission = models.CharField(max_length = 50,choices = transmission_choices)
    price = models.IntegerField()
    horse_power = models.IntegerField()
    propellant = models.CharField(max_length=100)  
    # relation 
    showroom = models.ForeignKey(to = ShowRoom,related_name = "car_showroom",on_delete=models.CASCADE)

    # Extra for showroom data
    @property
    def showroom_data(self):
        """Return latest event name."""

        # self.customer_events.order_by('event_date').last()
        showroom_name = self.car_showroom

        return showroom_name 

     

