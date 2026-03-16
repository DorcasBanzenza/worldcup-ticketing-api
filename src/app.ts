import { Hono } from "hono";
import { matches } from './mock/matches'

export const app = new Hono()


app.get('/', (c) => {
  return c.json({
    success: true,
    message: process.env.API_NAME || "World Cup Ticketing API"
  })
})


app.get('/health', (c) => {
  return c.json({
    status: "ok",
    success : true,
    message: "World Cup Ticketing API",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "dev"
  })
})


