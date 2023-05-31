import os
import subprocess
plan = "free"
if plan == "free":
    app_path = r"C:\Mkyd\infinity_python\reactApp\infinity_app_free"
    # Change the current working directory
    os.chdir(app_path)
    # Run npm commands using subprocess
    commands = 'npm i',
    subprocess.run(commands, shell=True)
    
elif plan == "startup":
    app_path = r"C:\\Mkyd\\infinity_python\\reactApp\\infinity_app_startup"
    # Change the current working directory
    os.chdir(app_path)
    # Run npm commands using subprocess
    commands = 'npm i',
    subprocess.run(commands, shell=True)
elif plan == "enterprise":
    app_path = r"C:\\Mkyd\\infinity_python\\reactApp\\infinity_app_enterprise"
    # Change the current working directory
    os.chdir(app_path)
    # Run npm commands using subprocess
    commands = 'npm i',
    subprocess.run(commands, shell=True)

command3 = 'npm i'  # Example command to run npm install


