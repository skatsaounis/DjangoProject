# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rango', '0005_location'),
    ]

    operations = [
        migrations.RenameField(
            model_name='location',
            old_name='user_location',
            new_name='user',
        ),
    ]
