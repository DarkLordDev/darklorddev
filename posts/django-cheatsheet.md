---
title: "Django Cheatsheet"
short_desc: "In this blog you can learn django easily. It is a really great cheatsheet which you should check out now."
date: "Sat Jun 10 2022"
---

### What is Django?

Python-based web framework used for rapid development of web applications.

### Also Check

https://www.djangoproject.com/ for more information

### Setting Up Environment

- Go https://code.visualstudio.com/download and install Visual Studio Code and select all the checkboxes and open the application. You will see something like this
  ![App ScreenShot](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/getstarted_page.png)
- Click on the Extension icon on the left sidebar
  ![App ScreenShot](https://miro.medium.com/max/432/1*sFnf_B9rYxgpsn9wM8d5qw.png)
- Now, type python and click install where it says python and install all the extensions python wants you to install
- install python from https://python.org

### Installing Django + Setup

```shell
pip install django
```

### Creating a project

The below command creates a new project named projectName

```shell
django-admin startproject projectName
```

### Starting a server

The below command starts the development server.

```shell
python manage.py runserver
```

### Django MVT

Django follows MVT(Model, View, Template) architecture.

### Sample Django Model

Django follows MVT(Model, View, Template) architecture.

The model represents the schema of the database.

```python
from django.db import models

class Product(models.Model): # Product is the name of our model
    product_id=models.AutoField
```

### Sample views.py

View decides what data gets delivered to the template.

```python
from django.http import HttpResponse

def index(request):
    return HttpResponse("Django DarkLordDev Cheatsheet")
```

### Sample HTML Template

A sample .html file that contains HTML, CSS and Javascript.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>CodeWithHarry Cheatsheet</title>
	</head>
	<body>
		<h1>This is a sample template file.</h1>
	</body>
</html>
```

## Views in Django

### Sample Function-Based Views

A python function that takes a web request and returns a web response.

```python
from django.http import HttpResponse

def index(request):
    return HttpResponse("This is a function based view.")
```

### Sample Class-Based Views

Django's class-based views provide an object-oriented way of organizing your view code.

```python
from django.views import View

class SimpleClassBasedView(View):
    def get(self, request):
        pass # Code to process a GET request
```

### URLs in Django

Set of URL patterns to be matched against the requested URL.

### Sample urls.py file1

```python
from django.contrib import admin
from django.urls import path
from . import views

urlPatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
]
```

### Sample urls.py file2

```python
from django.urls import include, path

urlpatterns = [
    # ... snip ...
    path('community/', include('aggregator.urls')),
    path('contact/', include('contact.urls')),
    # ... snip ...
]
```

### Forms in Django

Similar to HTML forms but are created by Django using the form field.

### Sample Django form

```python
from django import forms

# creating a form
class SampleForm(forms.Form):
    name = forms.CharField()
    description = forms.CharField()
```

### Apps in Django

Apps in Django are like independent modules for different functionalities.

### Creating an app

```python
python manage.py startapp AppName
```

### Listing app in the settings.py

After creating an app, we need to list the app name in INSTALLED_APPS

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'AppName'
]
```

### Templates in Django

Used to handle dynamic HTML files separately.

### Configuring templates in settings.py

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ["templates"],
        'APP_DIRS': True,
        'OPTIONS': {
            # some options here
        },
    },
]
```

### Changing the views.py file

Changing the views.py file

```python
def index(request):
    return render(request, 'index.html') #render is used to return the template
```

### Sample template file

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Template is working</title>
	</head>
	<body>
		<h1>This is a sample django template.</h1>
	</body>
</html>
```

### Migrations in Django

Migrations are Django's way of updating the database schema according to the changes that you make to your models.

### Creating a migration

The below command is used to make migration (create files with information to update database) but no changes are made to the actual database.

```shell
python manage.py makemigrations
```

### Applying the migration

The below command is used to apply the changes to the actual database.

```shell
python manage.py migrate
```

### Admin interface in Django

Django comes with a ready-to-use admin interface.

### Creating the admin user

```shell
python manage.py createsuperuser
```

### Page Redirection

Redirection is used to redirect the user to a specific page of the application on the occurrence of an event.

### Redirect method

```python
from django.shortcuts import render, redirect

def redirecting(request):
    return redirect("https://www.codewithharry.com")
```

### Where To Go After This

There is a lot more in django than explained in this blog. You always have the option to go to https://www.djangoproject.com/ and learn more about it

### Download the cheatsheet

[Download this Django Cheatsheet](https://api.codewithharry.com/media/blogFiles/django-cheatsheet/Django_Cheatsheet_CodeWithHarry.pdf)

### Special Thanks to

- [CodeWithHarry]("https://codewithharry.com/") - My Blogs are heavily inspired by his blogs, Go Check him out.
