# Generated by Django 2.2.1 on 2019-05-07 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car_api', '0002_auto_20190507_0704'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='image',
            field=models.ImageField(blank='True', upload_to='all_image'),
        ),
    ]