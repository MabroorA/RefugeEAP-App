# RefugEAP Network

## Django

We can use **pip** to install Django. Input this command in our terminal:

pip install Django==4.0.2 

The latest official version is 4.1.5 but we are not using it because we are not sure if other packages are compatible with the latest version of django or not. 

Documentation:
https://docs.djangoproject.com/en/4.1/

### What is Django? (answered by ChapGPT)

Q: What is the web framework Django? What is the difference between a project and an application in the web framework Django?

A: 

Django is a high-level web framework written in Python that allows developers to build web applications quickly and efficiently. It follows the model-view-controller (MVC) architectural pattern and is known for its ease of use and flexibility.

In Django, a project is a collection of settings for an instance of Django. It contains the configuration for the database, Django-specific options and application-specific settings.

An application is a self-contained module that encapsulates a specific functionality in a project. Applications can be plugged and unplugged from a project as needed. Each application can have its own models, views, and templates and can be reused in other projects. In other words, An application is a package of code and files that provide specific functionality to your project.

In summary, A project is a collection of configurations and applications, and An application is a module that provides specific functionality to a project.

## React

Documentation:
https://reactjs.org/docs/getting-started.html

## RegugEAP directory

It is the base of our whole project. Inside the project, we should have different applications performing different tasks

Things below are the ***applications*** we have:

Pages: An application where we have our ***home page***, ***about us***, ***English page***, ***get involved***, ***contact us***.

ResueBank: An application where we have our resource reuse bank.

Login(?): An application where we have our login system

Blog(?): An application where we have our blogs and other information from different media

(?) means we are not sure if these apps are needed or not. <br>
If the Blog is designed and operated as a news website then an independent app for Blog is neccessary

#### Database

to be updated


## Start

To start the server, run this command in the termial: (Make sure you are in the correct directory)

python manage.py runserver