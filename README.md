# Reservations Machines GYM "FITNESS BODY"

## Group Members

- Christopher Pallo
- Brayan Davila

## Table of Contents

1. [Problem Statement](#problem-statement)
   - [Proposed Solution](#proposed-solution)
   - [Backend](#backend)
   - [Frontend](#frontend)
2. [Installation](#installation)
   - [Requirements](#requirements)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
3. [Program Execution](#program-execution)
   - [Run the Application](#run-the-application)
4. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)
5. [AWS ECR, EC2](#aws-ecr-ec2)
   - [Evidences](#evidences)

## Problem Statement

Fitness Body GYM needs a system to record and manage the available machine reservations and quantities. Currently, the reservations of each machine are handled manually, which causes inefficiencies and human errors. The goal is to develop an automated system that will allow the administrators:

1. Add new reserves.
2.	Update the reservations that are already registered.
3.	Consult the reservations that have already been made.

This system must be simple and efficient, allowing an accurate management of each machine reservation, which is crucial to maintain an adequate management of machine availability and avoid allocation problems for each user.

### Proposed Solution
Implement an application using microservices, divided into two main parts:

### 1. Backend

- **Machine Reservation Service:** Responsible for managing the creation, updating and consultation of each reservation.

### 2. Frontend

- **Web Application:** User interface for administrators to interact with the reservation service, registering new reservations and updating those already registered.

## Installation

### Requirements
- npm (Node Package Manager)

### Clone the Repository
```sh
git clone https://github.com/BrayanBJ27/gymFrontend.git
```

### Install Dependencies
```sh
npm install
```
## Program Execution
### Run the Application
```sh
npm run dev
```

## DockerHub
### DockerHub Repository
https://hub.docker.com/r/brayanbj27/bd-gym-frontend

Docker Pull Command
```sh
docker pull brayanbj27/bd-gym-frontend
```

## AWS ECR, EC2 
### Evidences
**Summary of the Instance**
![image](https://github.com/BrayanBJ27/gymFrontend/assets/87538474/3a61c483-ebf2-4c4e-8efc-f0e7b200ff3b)

**Verify that images are running on AWS**

![image](https://github.com/BrayanBJ27/gymFrontend/assets/87538474/6faf5b59-228d-4280-b026-8e80aabfba9a)

**Frontend running on the instance IP**

![image](https://github.com/BrayanBJ27/gymFrontend/assets/87538474/3c239b4d-9948-470d-ad70-c19d4771d594)

**Microservice Add running on the instance IP**

![image](https://github.com/BrayanBJ27/gymFrontend/assets/87538474/9c4d9c8f-9bcf-4106-bd45-6b3d44015d3e)

**Microservice List running on the instance IP**

![image](https://github.com/BrayanBJ27/gymFrontend/assets/87538474/688bbf78-c6fa-4f90-aa6c-d103fb97b813)

**Microservice Update running on the instance IP**

![image](https://github.com/BrayanBJ27/gymFrontend/assets/87538474/65ab46d1-bce2-4cee-b838-ae82ebdfc439)
