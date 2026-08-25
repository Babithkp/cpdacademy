
import toml
import os

# Always find config.toml relative to this file (project/config.py)
def read_config():
    config_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'config.toml')
    config = toml.load(config_file)
    return config