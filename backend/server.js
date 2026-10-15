
const express = require('express'); 
const cors = require('cors');
const { exec } = require('child_process'); 


const app = express();


app.use(cors());


const PORT = 5000;

app.get('/api/ping', (req, res) => {
 
  const host = req.query.host || '8.8.8.8';

  exec(`ping -c 1 ${host}`, (error, stdout) => {
  
    if (error) {
      return res.status(500).json({ error: "Host unreachable or invalid input" });
    }

    const match = stdout.match(/time=([0-9.]+)\s+ms/);
    
    if (match) {
      const latencyMs = parseFloat(match[1]); // Extract the actual number (e.g., 14.5)
      
     
      const currentTime = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      });

    
      return res.json({
        time: currentTime,
        ms: Math.round(latencyMs)
      });
    }

    res.status(500).json({ error: "Could not parse ping metrics" });
  });
});


app.listen(PORT, () => {
  console.log(`🚀 NetPulse server engine running on http://localhost:5000`);
});
