from django.apps import AppConfig
from django.conf import settings


class MainAppConfig(AppConfig):
    name = "dbribeapp"

    def ready(self):
        from .utils import gather_public_state
        settings.PUBLIC_STATE_COLLECTORS.append(gather_public_state)