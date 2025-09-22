# nodes-demo-app
A practical demonstration of a CI/CD workflow created for Task 1 of the Elevate Labs DevOps Internship. This project uses GitHub Actions to automate the build, containerization (with Docker), and publishing of a Node.js application to DockerHub. The pipeline is designed to be triggered on every push to the main branch.

**Project Files
*server.js: The main Node.js server file using the Express framework.
*package.json: Defines project metadata and dependencies.
*Dockerfile: Instructions to build the Docker image for the application.
*.github/workflows/main.yml: The GitHub Actions workflow file for the CI/CD pipeline.
*views/index.ejs: The home page template.
*views/contact.ejs: The contact page template.

**STEP 1: Launch an EC2 Instance**
  * Log in to your AWS Management Console and navigate to the EC2 Dashboard and click Launch instance.
  * Choose an Ubuntu Server 22.04 LTS image, t2.micro, and storage of 20gb.
  * Configure the security group to allow inbound traffic on port 22 (SSH) and also port 3000 (for your Node.js app) from anywhere (0.0.0.0/0).
  * Launch the instance and connect using SSH.
  * Clone the repository
   ```bash
      git clone https://github.com/CSD-FX/nodejs-demo-app.git
   ```

STEP 2: install Docker and Git by running below commands----
```bash
sudo apt update
sudo apt install docker.io -y
sudo apt install git -y
sudo usermod -aG docker $USER
newgrp docker
echo "Hello ELEVATE-LABS USER 😊!! You've successfully installed Docker and Git in your terminal😇✌🏼"
```
**STEP 3: Configure Docker Hub Credentials as GitHub Secrets
*In your GitHub repository, go to Settings > Secrets and variables > Actions.
*Click on New repository secret.
*Create a new secret named DOCKER_USERNAME and enter your Docker Hub username as the value.
*Create another secret named DOCKER_PASSWORD and enter your Docker Hub password or an access token as the value.
*These secrets are essential for the workflow to log in to Docker Hub and push the image securely.




**STEP 3: Configure the EC2 Instance as a Self-Hosted Runner ⚙️
*In your GitHub repository, navigate to Settings > Actions > Runners.
*Click New self-hosted runner and choose the operating system (Linux) and architecture (x64).
*Copy the commands provided by GitHub to your clipboard or use the below commands
Paste and run these commands on your EC2 instance. The commands will download and configure the runner.







Step 5: Verify the Workflow

On GitHub, go to your repository and click on the Actions tab.

You will see the CI/CD pipeline running. Click on the workflow run to view the progress of the build_and_push_image job.

Once the job is complete, you can verify that the new Docker image has been pushed to your Docker Hub account.
