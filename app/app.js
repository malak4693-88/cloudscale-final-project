const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>CloudScale Final Project Dashboard</h1>
        <p><strong>Team Members:</strong> Sajaa, Mayar, Malak</p>
        <hr>
        <ul>
            <li><strong>Docker Image:</strong> Running</li>
            <li><strong>Azure Container Registry:</strong> Image Stored</li>
            <li><strong>Azure Kubernetes Service:</strong> Deployed</li>
            <li><strong>Terraform:</strong> Infrastructure Created</li>
            <li><strong>GitHub Actions:</strong> CI/CD Enabled</li>
            <li><strong>Environment:</strong> Production</li>
        </ul>
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