# Tango with Django Demo Project
## Installation
1. Install python 2.7.6 and above
   ```
   $ apt-get install python
   ```
2. Install Setuptools
   ```
   $ wget https://bitbucket.org/pypa/setuptools/raw/bootstrap/ez_setup.py -O - | python
   ```
3. Install Pip
   ```
   $ sudo easy_install pip
   ```
4. Install Requirements
   ```
   $ pip install -r requirements.txt
   ```
5. Install Apache Server
   ```
   $ apt-get install apache2
   ```
6. Install and activate mod wsgi
   ```
   $ apt-get install libapache2-mod-wsgi
   $ a2enmod mod-wsgi
   ```
7. Edit Apache conf file (Apend apache.conf to the end of apache conf file)
8. Restart apache service
9. Create a Django project to a temp directory and copy manage.py and wsgi.py to tango_with_django_project
   ```
   $ django-admin.py startproject tango_with_django_project
   ```
10. put project inside `/var/www/html` directory
11. Start project to create sqlite3 database file. In addition stop server and make migrations
   ```
   $ python manage.py runserver
   $ python manage.py migrate
   ```
12. Populate database and change ownership of project and database file
   ```
   $ python manage.py populate_rango.py
   $ chown www-data:www-data tango_with_django_project
   $ chown www-data:www-data tango_with_django_project/db.sqlite3
   ```
13. Restart apache service
   ```
   $ sudo service apache2 restart
   ```
14. Enjoy the show