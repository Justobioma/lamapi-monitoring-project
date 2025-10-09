# Serverless Hello API

A simple AWS Lambda function triggered via API Gateway that returns a greeting.

## Endpoint
GET - https://9rl863hqfk.execute-api.eu-west-1.amazonaws.com/dev/hello

## Monitoring Setup

This project uses Grafana Cloud to monitor AWS Lambda functions via CloudWatch.

### Metrics Tracked
- Invocation Rate
- Error Rate
- Duration
- Cold Starts

### Dashboards
- AWS Lambda Overview
- Function-specific RED metrics

## Grafana Cloud Integration

This project uses Grafana Cloud to monitor AWS Lambda via CloudWatch.

### Setup Steps
1. Log into Grafana Cloud
2. Navigate to AWS → Configuration
3. Launch CloudFormation stack
4. Enter Role ARN in Grafana
5. View Lambda metrics in dashboards
![Screenshot_6-10-2025_145726_justobioma grafana net](https://github.com/user-attachments/assets/8c3341d2-7d59-475e-961d-5444139af75c)

### POST /submit

## Endpoint
https://9rl863hqfk.execute-api.eu-west-1.amazonaws.com/dev/submit

Accepts a JSON payload with `name` and `message`.

**Request:**
```json
{
  "name": "Obioma",
  "message": "This is a test submission"
}
Response:
{
  "status": "Success",
  "received": { "name": "Obioma", "message": "..." },
  "timestamp": "..."
}



---


