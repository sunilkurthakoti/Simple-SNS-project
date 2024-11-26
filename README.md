# Simple-SNS-project
simple notification service with node.js


## **1. Create or Update the Node.js App Code Locally**

- Write or update your Node.js application that integrates with AWS SNS for sending emails.
- Ensure your application works properly locally.
  - Use a web framework like **Express** to set up your server.
  - Use the **AWS SDK** to configure SNS for sending emails to subscribers.
 
    ![Screenshot (85)](https://github.com/user-attachments/assets/89895486-de6e-4d89-a03a-433eebc4e089)


## **2. Create an SNS Topic and Subscription for Email**

- Log in to the **AWS Console** and navigate to **SNS (Simple Notification Service)**.
- Create a **new SNS topic** with a meaningful name (e.g., `email-notifications`).
- After creating the topic, create a **subscription** for the topic:
  - Choose **Email** as the subscription protocol.
  - Enter the email address where you want to receive the notifications.
  - Confirm the subscription by clicking on the confirmation link sent to the email.

    ![Screenshot (82)](https://github.com/user-attachments/assets/e0acec39-8062-4233-b6cd-6f9d03bd64d4)


## **3. Update the SNS Topic ARN in the Code Locally**

- After creating the SNS topic, go to your **SNS dashboard** and find the **Topic ARN**.
- Copy the **Topic ARN** from the AWS Console.
- In your Node.js application code, replace the existing `TopicArn` with the new one you copied from AWS.

## **4. Push the Code to GitHub**

- Create a **new repository** on GitHub for your Node.js app.
- Initialize **Git** in your project folder if you haven't already.
- Commit all changes and push the code to your newly created GitHub repository.
  - Add a `.gitignore` file to exclude unnecessary files like `node_modules` and `.env`.

## **5. Create an EC2 Instance and Clone the GitHub Repo**

- **Launch an EC2 Instance**: Go to the AWS Console and create a new EC2 instance, selecting your preferred operating system (e.g., Ubuntu).
   
- **Configure Security Groups**: Set up a security group to allow access via **SSH** for instance management and **HTTP** for web access (you may also enable **HTTPS** if needed).

  ![Screenshot (83)](https://github.com/user-attachments/assets/f6cde43a-3527-461c-b8b7-3d9c070b88ff)


- **Connect to the Instance**: Once the EC2 instance is up, connect to it using SSH from your local machine.

- **Clone Your GitHub Repository**: On the EC2 instance, clone the GitHub repository that contains your Node.js app.

  ![Screenshot (84)](https://github.com/user-attachments/assets/28aac058-eebf-40e1-8d75-b70b816418c5)


- **Install Node.js and npm**: Ensure **Node.js** and **npm** are installed on the EC2 instance to run your app.

  ![Screenshot (86)](https://github.com/user-attachments/assets/1ab74113-ae4a-4554-a1f9-7ac82748868a)


- **Install PM2**: Install **PM2**, a process manager for Node.js, which helps in keeping the app running in the background.

- **Install Project Dependencies**: After cloning the repo, install the necessary dependencies defined in the `package.json` file for the Node.js app.

- **Run the Application with PM2**: Use **PM2** to run the application in the background and keep it alive even after server reboots.

- **Verify the Application**: Ensure the application is running correctly by accessing it through the public IP of the EC2 instance in a web browser.

- **Test Email Functionality**: Confirm the email functionality via SNS by sending a request and checking if the email is received.

## **6. Check Your Website for the Output**

- Once your application is running on the EC2 instance, open a browser and navigate to the **public IP** of your EC2 instance.
- Ensure the Node.js app is running successfully and that the SNS email functionality is working as expected.
- Test sending an email and verify if the email is received at the subscription email address.

  ![Screenshot (89)](https://github.com/user-attachments/assets/63c2f7ff-bc3f-4b84-9a20-7600d32daf16)

![Screenshot (90)](https://github.com/user-attachments/assets/96db8584-e019-450d-95ea-afe98482c22c)


