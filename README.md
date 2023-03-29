# RefugEAP Network

## Packages to install
```
$ npm install
$ pip install djangorestframework
$ pip install django-extensions
$ pip install django-cors-headers
```

## Connect to the localhost / Run the project on Django

```
(frontend) $ npm run build 
(frontend) $ cd ../
(RefugEAP) $ python manage.py runserver
```
> You need to re-do these steps if you have made new changes

## Project Structure


### node_modules

```
It stores all the npm packages there
```

### RefugEAP

```
Main part of our project

- Blog (Django Blog app) - urls and models related to blog page
- config (Django Main app) - all requests are first gone through here
- frontend (React app) - all the frontend is done here
- pages (Django Pages app) - urls and model related to event
- reuseBank (Django Reusebank app) - urls and model related to reusebank
```



