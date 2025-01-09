const express = require('express');
const { chromium } = require('playwright');
const app = express();
app.use(express.json());

app.post('/api/getWebsiteContents', async (req, res) => {
  const { url } = req.body;  // Receive the URL from the client

  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    const content = await page.content(); // Get the entire HTML content
    await browser.close();

    res.json({ content }); // Send the content back as JSON
  } catch (error) {
    console.error("Error fetching website content:", error);
    res.status(500).json({ error: "An error occurred." });
  }
});

// ... (your existing /api/getAnswer endpoint code from the previous response)

app.listen(3001, () => console.log('Server listening on port 3001'));

