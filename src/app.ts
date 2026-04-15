import { Hono } from 'hono'

const app = new Hono ()

app.get('/', (c) => {
  const apiName = process.env.API_NAME || 'World Cup Ticketing API'
  return c.json({
    success: true,
    message: 'World Cup Ticketing API'
  })
})
app.get('/health',(c)=>{
  return c.json({
    success: true, 
    status: 'OK',
    message:'World Cup Ticketing API',
    uptime:process.uptime(),
    environment: process.env.NODE_ENV || 'developement',
  })
})
export {app}


