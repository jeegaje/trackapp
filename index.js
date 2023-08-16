const express = require("express");
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wyntpguqruuohlkekssl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5bnRwZ3VxcnV1b2hsa2Vrc3NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyODg5MTcsImV4cCI6MjAwNjg2NDkxN30.ifJprJ3AwqX7ogelji5Xbbw-Tv--akgZhOCnxkShrf4'
const supabase = createClient(supabaseUrl, supabaseKey)
const app = express();

app.post("/", (req, res) => {
async function getData() {
  const { data, error } = await supabase
  .from('transactions')
  .insert([
    { transaction_value: req.body},
  ])
  .select()
}
getData()
res.send(req.body);
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;