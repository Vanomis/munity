# Generated by Django 3.2.7 on 2021-10-19 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workspaces', '0008_alter_workspace_db_connection'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workspace',
            name='slug',
            field=models.SlugField(primary_key=True, serialize=False, unique=True),
        ),
    ]
