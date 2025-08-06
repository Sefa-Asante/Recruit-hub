import './config/instrument.js'
import * as Sentry from "@sentry/node";

import express from 'express'

import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkWebhook } from './controllers/webhooks.js';



// initializing express
const app = express()


//connect to database
await connectDB()

//middlewares
app.use(cors())
app.use(express.json())

// Routes

app.get('/',(req,res)=>res.send("API Working"))
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.post('/webhooks', clerkWebhook)

//Port
const PORT = process.env.Port || 5000
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, ()=>{
    console.log("server is running on port 5000")
})



