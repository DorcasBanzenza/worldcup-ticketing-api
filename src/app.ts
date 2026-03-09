import { Hono } from 'hono'

export const app = new Hono()

app.get('/', (c) => {
  return c.json({
    success: true,
    message: process.env.API_NAME || "World Cup Ticketing API"
  })
})

// N'oubliez pas l'endpoint /health demandé dans les exercices précédents
app.get('/health', (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "dev"
  })
})


