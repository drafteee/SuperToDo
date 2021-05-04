# Django

[https://docs.djangoproject.com/en/3.1/ref/contrib/postgres/](postgre})

*structure*
mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py

* The outer mysite/ root directory is a container for your project. Its name doesn’t matter to Django; you can rename it to anything you like.
* manage.py: A command-line utility that lets you interact with this Django project in various ways. You can read all the details about manage.py in django-admin and manage.py. [https://docs.djangoproject.com/en/3.1/ref/django-admin/]
* The inner mysite/ directory is the actual Python package for your project. Its name is the Python package name you’ll need to use to import anything inside it (e.g. mysite.urls).
* mysite/__init__.py: An empty file that tells Python that this directory should be considered a Python package. If you’re a Python beginner, read more about packages in the official Python docs.
* mysite/settings.py: Settings/configuration for this Django project. Django settings will tell you all about how settings work.
* mysite/urls.py: The URL declarations for this Django project; a “table of contents” of your Django-powered site. You can read more about URLs in URL dispatcher.
* mysite/asgi.py: An entry-point for ASGI-compatible web servers to serve your project. See How to deploy with ASGI for more details.
* mysite/wsgi.py: An entry-point for WSGI-compatible web servers to serve your project. See How to deploy with WSGI for more details.

## settings.py
*Also, note the **INSTALLED_APPS** setting at the top of the file. That holds the names of all Django applications that are activated in this Django instance. Apps can be used in multiple projects, and you can package and distribute them for use by others in their projects.*

## Urls

[https://docs.djangoproject.com/en/3.1/topics/http/urls/]

``` python
path('articles/<int:year>/', views.year_archive)
    path                      callback function
```

## Proxy models
1 If you are mirroring an existing model or database table and don’t want all the original database table columns, use Meta.managed=False. That option is normally useful for modeling database views and tables not under the control of Django.
2 If you are wanting to change the Python-only behavior of a model, but keep all the same fields as in the original, use Meta.proxy=True. This sets things up so that the proxy model is an exact copy of the storage structure of the original model when data is saved.

## Indexes
[https://docs.djangoproject.com/en/3.1/ref/models/indexes/]

## Query
[https://docs.djangoproject.com/en/3.1/topics/db/queries/]

[https://docs.djangoproject.com/en/3.1/topics/db/optimization/](perfomance)

*QuerySets are lazy*
>QuerySets are lazy – the act of creating a QuerySet doesn’t involve any database activity. You can stack filters together all day long, and Django won’t actually run the query until the QuerySet is evaluated. Though this looks like three database hits, in fact it hits the database only once

*Each QuerySet contains a cache to minimize database access.*
>Querysets do not always cache their results. 

```python
Poll.objects.get(
    Q(pub_date=date(2005, 5, 2)) | Q(pub_date=date(2005, 5, 6)),
    question__startswith='Who',
)

# INVALID QUERY
Poll.objects.get(
    question__startswith='Who',
    Q(pub_date=date(2005, 5, 2)) | Q(pub_date=date(2005, 5, 6))
)
```

### Copy
```python
blog = Blog(name='My blog', tagline='Blogging is easy')
blog.save() # blog.pk == 1

blog.pk = None
blog.save() # blog.pk == 2
```

### Get
[https://djbook.ru/rel1.8/ref/models/querysets.html]
[https://docs.djangoproject.com/en/3.1/ref/models/querysets/]
```python
Blog.objects.values('id', 'name')
<QuerySet [{'id': 1, 'name': 'Beatles Blog'}]>
---
from django.db.models.functions import Lower
>>> Blog.objects.values(lower_name=Lower('name'))
<QuerySet [{'lower_name': 'beatles blog'}]>

```

### Save

*What happens when you save?*
>When you save an object, Django performs the following steps:

1 Emit a pre-save signal. The pre_save signal is sent, allowing any functions listening for that signal to do something.

2 Preprocess the data. Each field’s pre_save() method is called to perform any automated data modification that’s needed. For example, the date/time fields override pre_save() to implement auto_now_add and auto_now.

3 Prepare the data for the database. Each field’s get_db_prep_save() method is asked to provide its current value in a data type that can be written to the database.
Most fields don’t require data preparation. Simple data types, such as integers and strings, are ‘ready to write’ as a Python object. However, more complex data types often require some modification.
For example, DateField fields use a Python datetime object to store data. Databases don’t store datetime objects, so the field value must be converted into an ISO-compliant date string for insertion into the database.

4 Insert the data into the database. The preprocessed, prepared data is composed into an SQL statement for insertion into the database.

5 Emit a post-save signal. The post_save signal is sent, allowing any functions listening for that signal to do something.

### Update
```python
product.name = 'Name changed again'
product.save(update_fields=['name'])
```

## Migrations
[https://docs.djangoproject.com/en/3.1/topics/migrations/]

## Manager
*Для вынеса логики с БД в отдельный слой*
[https://docs.djangoproject.com/en/3.1/topics/db/managers/]

## conditional-expressions
[https://docs.djangoproject.com/en/3.1/ref/models/conditional-expressions/]

## database-functions
[https://docs.djangoproject.com/en/3.1/ref/models/database-functions/]

## Deployment checklist
[https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/](Deployment_checklist)

## Localization
[https://docs.djangoproject.com/en/3.1/topics/i18n/translation/]

## TimeZone
[https://docs.djangoproject.com/en/3.1/topics/i18n/timezones/]

## Ayth
[https://docs.djangoproject.com/en/3.1/topics/auth/default/]

## Cache
[https://docs.djangoproject.com/en/3.1/topics/cache/]

## Logging
[https://docs.djangoproject.com/en/3.1/topics/logging/]

## Pagination
[https://docs.djangoproject.com/en/3.1/topics/pagination/]

## Message real time
[https://docs.djangoproject.com/en/3.1/ref/contrib/messages/]

## Serialization
[https://docs.djangoproject.com/en/3.1/topics/serialization/]

## Session
[https://docs.djangoproject.com/en/3.1/topics/http/sessions/]

## Sitemap
[https://docs.djangoproject.com/en/3.1/ref/contrib/sitemaps/]

## Validators for model
[https://docs.djangoproject.com/en/3.1/ref/validators/]

## ETag
[https://docs.djangoproject.com/en/3.1/topics/conditional-view-processing/]

## Deploy project
[https://docs.djangoproject.com/en/3.1/howto/deployment/]