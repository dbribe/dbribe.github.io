DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '--#7uq^l(05t&i)63u5-l!6x3lt=)3jg6$h=5_wa1a*tqrfq@c'

ALLOWED_HOSTS = ['']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
        'CONN_MAX_AGE': 600,
    },
}