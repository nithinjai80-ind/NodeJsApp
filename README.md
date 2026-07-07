Project Structure

nodejs-app/
 ── package.json
 ── server.js
 ── .gitignore
 ── README.md



# Node.js Demo Application

## Install Dependencies

npm install

## Run

npm start

## URL

http://localhost:8080

#ubuntu commands
sudo su
sudo apt update
sudo apt install apache2 -y
cd ../..
cd opt
sudo apt install docker.io -ysudo apt update
systemctl start docker
systemctl enable docker
systemctl status docker 
ctrl+c
sudo apt update
sudo apt install fontconfig openjdk-21-jre
java -version
sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key
echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
  sudo apt update
  sudo apt install jenkins
  sudo systemctl enable jenkins
  sudo systemctl start jenkins
  sudo systemctl status jenkins

Unlocking Jenkins:
        
       1 When you first access a new Jenkins controller, you are asked to unlock it using an automatically-generated password.

    Browse to http://localhost:8080 (or whichever port you configured for Jenkins when installing it) and wait until the Unlock Jenkins page appears.)

    2.From the Jenkins console log output, copy the automatically generated alphanumeric password (between the 2 sets of asterisks).

    Note:

    The command: sudo cat /var/lib/jenkins/secrets/initialAdminPassword will print the password at console.

    If you are running Jenkins in Docker using the official jenkins/jenkins image you can use sudo docker exec ${CONTAINER_ID or CONTAINER_NAME} cat /var/jenkins_home/secrets/initialAdminPassword to print the password in the console without having to open an interactive shell inside the container.

        password in the console without having to open an interactive shell inside the container.

On the Unlock Jenkins page, paste this password into the Administrator password field and click Continue.
Note:

    The Jenkins console log indicates the location (in the Jenkins home directory) where this password can also be obtained. This password must be entered in the setup wizard on new Jenkins installations before you can access Jenkins’s main UI. This password also serves as the default administrator account’s password (with username "admin") if you happen to skip the subsequent user-creation step in the setup wizard.

npm install
npm start
git init

git add .

git commit -m "Initial Commit"

git remote add origin <repo>

git push origin main


Create Elastic Beanstalk Environment

In the AWS Console:
            EC2 Instance
            Security Group
            Load Balancer (optional)
            Auto Scaling Group
            CloudWatch
            IAM Roles

Create IAM User:
           Create an IAM user with permissions such as:

                   Elastic Beanstalk
                   S3
                   EC2
                   CloudFormation

Install Jenkins Plugins:

            Pipeline
            Git
            NodeJS
            AWS Credentials
            AWS CLI (or ensure the AWS CLI is installed on the Jenkins machine)


Install AWS CLI on Jenkins
sudo apt update

sudo apt install awscli

aws --version

Configure AWS CLI

aws configure
git remote add origin https://github.com/<your-username>/nodejs-demo-app.git
git branch -M main
git push -u origin main

aws configure list

