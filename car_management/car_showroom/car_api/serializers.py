from rest_framework import serializers
from .models import Car,ShowRoom


class ShowroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShowRoom
        fields = '__all__'


#lead serializer
class CarSerializer(serializers.ModelSerializer):
    # showroom_name = serializers.ReadOnlyField()
    showroom = ShowroomSerializer()

    # showroom = serializers.StringRelatedField(many=True)
    class Meta:
        model = Car
        fields = '__all__'

        
class CarSerializerBasic(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

                