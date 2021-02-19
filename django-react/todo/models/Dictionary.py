from django.db import models


class Dictionary(models.Model):
    rus = models.CharField(max_length=120)
    eng = models.CharField(max_length=120)
    objects = models.Manager()
