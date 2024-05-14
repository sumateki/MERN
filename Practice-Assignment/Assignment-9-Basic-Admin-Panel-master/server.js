const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to the API
app.use('/api', createProxyMiddleware({ target: 'https://jsonplaceholder.typicode.com', changeOrigin: true }));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
