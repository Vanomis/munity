# Generated by Django 3.2.7 on 2021-10-17 21:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('workspaces', '0004_auto_20211017_2049'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='environmentconfig',
            unique_together=set(),
        ),
        migrations.RemoveField(
            model_name='environmentconfig',
            name='workspace',
        ),
    ]
