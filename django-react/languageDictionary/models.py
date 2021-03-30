from django.db import models
from django.db.models import Q
# Create your models here.


# class DictionaryPairQuerySet(models.QuerySet):
#     def by_username(self, username):
#         return self.filter(user__username__iexact=username)

#     def feed(self, user):
#         profiles_exist = user.following.exists()
#         followed_users_id = []
#         if profiles_exist:
#             followed_users_id = user.following.values_list(
#                 "user__id", flat=True)  # [x.user.id for x in profiles]
#         return self.filter(
#             Q(user__id__in=followed_users_id) |
#             Q(user=user)
#         ).distinct().order_by("-timestamp")


# class DictionaryPairManager(models.Manager):
#     def get_queryset(self, *args, **kwargs):
#         return DictionaryPairQuerySet(self.model, using=self._db)

#     def feed(self, user):
#         return self.get_queryset().feed(user)


class Language(models.Model):
    name = models.CharField(max_length=20)

    objects = models.Manager()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-id']


class DictionaryPair(models.Model):
    correct = models.IntegerField(default=0, null=False)
    incorrect = models.IntegerField(default=0, null=False)
    fromL = models.CharField(max_length=20)
    rus = models.CharField(max_length=20)
    language = models.ForeignKey(
        Language, on_delete=models.CASCADE, null=False)
    objects = models.Manager()

    class Meta:
        ordering = ['-id']


class Calculator(models.Model):
    date = models.DateField(auto_now_add=True)
    amount = models.IntegerField(default=0, null=False)
    objects = models.Manager()

    class Meta:
        ordering = ['-id']
