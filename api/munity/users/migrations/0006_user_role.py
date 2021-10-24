# Generated by Django 3.2.7 on 2021-10-17 23:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authorization', '0005_auto_20211017_2105'),
        ('users', '0005_user_workspace'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='role',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='authorization.role'),
        ),
    ]
