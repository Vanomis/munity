# Generated by Django 3.2.7 on 2021-10-20 00:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('records', '0007_alter_record_workspace'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='record',
            name='model_name',
        ),
    ]
