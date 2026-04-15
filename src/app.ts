import { Hono } from 'hono'
import { matches } from './mock/matches'

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
app.get('/matches/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  const match = matches.find(m => m.id ===id)

   if (!match){
    return c.json({
      success: false,
      error: 'Match not found'
    }, 404)
   }

   return c.json({
    success: true,
    data: match
   })
})
export {app}


