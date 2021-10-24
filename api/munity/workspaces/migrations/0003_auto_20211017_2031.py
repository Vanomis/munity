# Generated by Django 3.2.7 on 2021-10-17 20:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workspaces', '0002_auto_20211017_2017'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='workspace',
            options={'get_latest_by': 'modified'},
        ),
        migrations.RenameField(
            model_name='environmentconfig',
            old_name='related_workspace',
            new_name='workspace',
        ),
        migrations.RemoveField(
            model_name='workspace',
            name='related_workspace',
        ),
        migrations.AlterField(
            model_name='workspace',
            name='slug',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterUniqueTogether(
            name='environmentconfig',
            unique_together={('key', 'workspace')},
        ),
    ]
