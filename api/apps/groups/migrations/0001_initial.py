# Generated by Django 3.2 on 2021-05-05 18:36

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=64)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('custom_field', models.JSONField(blank=True, default=dict)),
                ('groups', models.ManyToManyField(blank=True, related_name='_groups_group_groups_+', to='groups.Group')),
            ],
            options={
                'ordering': ('name',),
            },
        ),
    ]
