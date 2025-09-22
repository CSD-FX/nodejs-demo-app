# nodes-demo-app
A practical demonstration of a CI/CD workflow created for Task 1 of the Elevate Labs DevOps Internship. This project uses GitHub Actions to automate the build, containerization (with Docker), and publishing of a Node.js application to DockerHub. The pipeline is designed to be triggered on every push to the main branch.

**Project Files**  
*server.js: The main Node.js server file using the Express framework.  
*package.json: Defines project metadata and dependencies.  
*Dockerfile: Instructions to build the Docker image for the application.  
*.github/workflows/main.yml: The GitHub Actions workflow file for the CI/CD pipeline.  
*views/index.ejs: The home page template.  
*views/contact.ejs: The contact page template.  

---

## STEP 1: Launch an EC2 Instance  
*Log in to your AWS Management Console and navigate to the EC2 Dashboard and click Launch instance.  
*Choose an Ubuntu Server 24.04 LTS image, t2.micro, and storage of 10gb.  
*Configure the security group to allow inbound traffic on port 22 (SSH), port 3000 (for your Node.js app), port 80 (HTTP) and port 443 (HTTPS) from anywhere (0.0.0.0/0).  
*Launch the instance and connect using SSH.  
*MAKE SURE TO GIVE EXECUTIVE PERMISSION FOR THE "pem file"

---

## STEP 2: Install Docker and Git by running below commands----
```bash
sudo apt update
sudo apt install docker.io -y
sudo apt install git -y
sudo usermod -aG docker $USER
newgrp docker
echo "Hello ELEVATE-LABS USER 😊!! You've successfully installed Docker and Git in your terminal😇✌🏼"
```

---

## STEP 3: Clone the repository in EC2 instance  
```bash
git clone https://github.com/CSD-FX/nodejs-demo-app.git
cd nodejs-demo-app
```
---

---

## STEP 4: Create a new repository on your GITHUB account (UNTICK Readme file or conflict can occur)----
*connect your remote repo to your local repo by running below command
```bash
   git remote remove origin
   git remote add origin <your new repository https url>
```

---
   
## STEP 5: Configure Docker Hub and EC2 instance using GitHub Secrets  
- Go to your repository on GitHub.  
- Click on Settings → Secrets and Variables → Actions.  
- Click **New repository secret** and add each secret one by one:  

**Secrets:**  
- `DOCKERHUB_USERNAME` → Your Docker Hub username  
- `DOCKERHUB_TOKEN` → Docker Hub access token or password  
- `SERVER_IP` → Public IP of your EC2 instance  
- `SERVER_USER` → EC2 SSH username (`ubuntu`)  
- `SERVER_SSH_KEY` → Private SSH key to access EC2

  use the above key_values as it is--

---


## STEP 6: Trigger the Pipeline by pushing
```bash
git add .
git commit -m "First commit to trigger Git action"
git branch -M main
git push -u origin main
```
*Provide GitHub login and personal token if asked so*  
*# If Error in push → Use:*  
```bash
git pull origin main --rebase
git push -u origin main --force
```

---

## STEP 7: Verify the Workflow 🧚‍♀️  
- On GitHub, go to your repository and click on the **Actions** tab.  
- You will see the CI/CD pipeline running.  
- Click on the workflow run to view the progress of the `build_push_pull_and_run` jobs.  

---

## STEP 8: Access your web app 😇✌🏼  
```bash
http://<your-EC2-public-IP>:3000
```
(running in port 3000)  

---

## STEP 9: To check the automation of the project  
- Head to **server.js** and edit any changes as per your wish  
- `git add .`, `git commit`, and `git push` to trigger the beauty of automation 😊  

---

🎉 HAPPY TO COMPLETE THE WHOLE END-END DEPLOYMENT ON MY OWN 😊😊
