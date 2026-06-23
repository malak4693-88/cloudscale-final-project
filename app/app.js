const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CloudScale Dashboard</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    background-color: #0d1117;
                    color: #c9d1d9;
                    margin: 0;
                    padding: 40px 20px;
                    display: flex;
                    justify-content: center;
                }
                .dashboard {
                    background-color: #161b22;
                    border: 1px solid #30363d;
                    border-radius: 12px;
                    width: 100%;
                    max-width: 600px;
                    padding: 32px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
                }
                h1 {
                    color: #58a6ff;
                    margin-top: 0;
                    font-size: 28px;
                    border-bottom: 1px solid #30363d;
                    padding-bottom: 16px;
                }
                .team {
                    background: rgba(88, 166, 255, 0.1);
                    border-left: 4px solid #58a6ff;
                    padding: 12px;
                    border-radius: 4px;
                    margin-bottom: 24px;
                    font-size: 15px;
                }
                .team strong {
                    color: #58a6ff;
                }
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 0;
                    border-bottom: 1px solid #21262d;
                }
                li:last-child {
                    border-bottom: none;
                }
                .label {
                    font-weight: 500;
                    color: #e6edf3;
                }
                .status-badge {
                    background-color: #238636;
                    color: #ffffff;
                    padding: 4px 10px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
            </style>
        </head>
        <body>
            <div class="dashboard">
                <h1>CloudScale Final Project</h1>
                <div class="team">
                    <strong>Team Members:</strong> Saja Ghazzal, Mayar, Malak
                </div>
                <ul>
                    <li><span class="label">Docker Image</span> <span class="status-badge">Running</span></li>
                    <li><span class="label">Azure Container Registry</span> <span class="status-badge">Stored</span></li>
                    <li><span class="label">Azure Kubernetes Service</span> <span class="status-badge">Deployed</span></li>
                    <li><span class="label">Terraform Infrastructure</span> <span class="status-badge">Created</span></li>
                    <li><span class="label">GitHub Actions CI/CD</span> <span class="status-badge">Enabled</span></li>
                    <li><span class="label">Environment</span> <span class="status-badge" style="background-color: #1f6feb;">Production</span></li>
                </ul>
            </div>
        </body>
        </html>
    `);
});

app.get('/health', (req, res) => {
    res.json({
        status: "healthy",
        service: "cloudscale-final-project"
    });
});

app.listen(port, () => {
    console.log(`CloudScale app listening at http://localhost:${port}`);
});