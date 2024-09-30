# VibeVista - AI-Powered Sentiment Analysis System

VibeVista is an AI-powered sentiment analysis system designed to provide real-time sentiment evaluation of CSV datasets. This serverless solution leverages AWS services such as Lambda, API Gateway, DynamoDB, and AWS Comprehend to deliver fast and scalable sentiment insights.

## Features

- **Real-time Sentiment Analysis**: Analyze large datasets in real time using AWS Lambda and AWS Comprehend.
- **Secure API Access**: Expose sentiment analysis results via a secure API using AWS API Gateway.
- **Scalable Data Storage**: Store analysis results in DynamoDB for fast and scalable access.
- **Optimized Performance**: Deployed on EC2 for high availability and optimized performance.

## Table of Contents

- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Architecture

The system is built on AWS infrastructure and includes the following components:

1. **AWS Lambda (Node.js)**: Handles the sentiment analysis processing by integrating with AWS Comprehend.
2. **S3**: Stores the input CSV files.
3. **API Gateway**: Provides secure endpoints for uploading CSV files and retrieving sentiment analysis results.
4. **DynamoDB**: Stores the sentiment results in a highly scalable manner.
5. **EC2**: Ensures optimal performance and high availability for the system.
6. **AWS Comprehend**: Performs sentiment analysis on the data.

## Tech Stack

- **Languages**: Node.js
- **Cloud Services**: AWS Lambda, API Gateway, S3, DynamoDB, EC2, AWS Comprehend
- **Database**: DynamoDB
- **Deployment**: AWS EC2

## Setup Instructions

### Prerequisites

- AWS account with access to Lambda, S3, API Gateway, DynamoDB, and EC2.
- Node.js installed locally.
- AWS CLI installed and configured.

