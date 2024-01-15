import toml
from project import app
import os

APP_DIR = app.config["APP_DIR"]
CONFIG = app.config["CONFIG"]

# return parsed TOML file -> Python DICT
def read_config():
    config_file = os.path.join(APP_DIR, CONFIG)
    config = toml.load(config_file)
    return config
