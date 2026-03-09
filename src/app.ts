import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: `Bienvenue sur ${process.env.API_NAME || "l'API"}`,
    environment: process.env.NODE_ENV
  })
})

app.get('/health', (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    apiName: process.env.API_NAME
  })
})

export { app }


