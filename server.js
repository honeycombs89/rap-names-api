const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
const rappers = {
  '21 savage': {
      'age': 29,
      'birthName': 'Shéyaa Bin Abraham-Joseph'
      'birthLocation': 'London, England'
  },
  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett'
    'birthLocation': 'Chicago, Illlinois'
  },
  'unknown':{
    'age': 0,
    'birthName': 'unknown'
    'birthLocation': 'unknown'
  }
}
//first thing is to serve up a file on main page -- boilerplate
//app.get is a network request ... just like an even listener
app.get('/', (request,response)=>{
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
  console.log = request.params.name.toLowerCase()
  if( rappers[rapperName]){
  response.json(rappers[rapperName])
}else{
  response.json(rappers['unknown'])
  }

})

app.listen(PORT,()=>{
  console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
}')
