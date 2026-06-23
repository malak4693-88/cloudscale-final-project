const express = require("express");
const os = require("os");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>CloudScale Final Project</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #eef1f5;
            margin: 0;
            padding: 0;
        }
        .dashboard {
            width: 80%;
            max-width: 800px;
            margin: 50px auto;
            background: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #1e293b;
            margin-bottom: 10px;
        }
        h2 {
            color: #666;
            font-size: 20px;
            margin-bottom: 30px;
        }
        .status-box {
            background: #f8fafc;
            border-left: 5px solid #10b981;
            padding: 15px;
            margin: 12px 0;
            text-align: left;
            font-size: 18px;
        }
        .running {
            color: green;
            font-weight: bold;
        }
        .footer {
            margin-top: 30px;
            color: #555;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <h1>CloudScale Final Project</h1>
        <h2>Containerized Web Application on Azure Kubernetes Service</h2>
        
        <div class="status-box">Docker Image: <span class="running">Running</span></div>
        <div class="status-box">Azure Container Registry: <span class="running">Image Stored</span></div>
        <div class="status-box">Azure Kubernetes Service: <span class="running">Deployed</span></div>
        <div class="status-box">Terraform: <span class="running">Infrastructure Created</span></div>
        <div class="status-box">GitHub Actions: <span class="running">CI/CD Enabled</span></div>
        <div class="status-box">Environment: <span class="running">Production</span></div>
        
        <p>Pod Name: ${os.hostname()}</p>
        <p class="footer">Created by: Student 1, Student 2, and Student 3</p>
    </div>
</body>
</html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        service: "cloudscale-final-project"
    });
});

app.listen(port, () => {
    console.log(`CloudScale app running on port ${port}`);
});