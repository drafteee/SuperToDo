# Generated by Django 3.1.5 on 2021-03-30 13:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('languageDictionary', '0004_auto_20210330_1515'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dictionarypair',
            old_name='eng',
            new_name='fromL',
        ),
    ]
