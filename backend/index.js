// 1- DEPENDENCIES
require('dotenv').config();
const express = require('express');
const data = require('./data');

const portfolio = data.portfolio;
const skills = data.skills;

// 2- INSTANTIATE AND CONFIGURE THE SERVER
const app = express() 
app.use(express.json())

// 3- PORT NUMBER
const PORT = process.env.PORT;

// 5- ENDPOINTS

// [GET] all projects in the db
app.get('/portfolio', (req, res) => {
  res.status(200).json(portfolio)
})

// [GET] project with the id passed as a parameter in the URL
app.get('/portfolio/:id', (req, res) => {
   
  // 1- pull out the id from the request (the URL param)
  const { id } = req.params
  // 2- find the dog in the dogs arr with the given id
  const project = portfolio.find(project => project.id === parseInt(id))
  console.log(portfolio)
  // 3- set status code and send back the dog
  if (!portfolio) {
    res.status(404).json({
      message: `No project with id ${id}`,
    })
  } else {
    res.status(200).json(project)
  }
})

// [GET] all skills

app.get('/skills', (req, res) => {
    res.status(200).json(skills)
})
  

// [GET, POST...] catch all endpoint (404 resource not found)
app.all('*', (req, res) => {
  res.status(404).json({ message: 'Endpoint not found!' })
})

// 6- LISTEN FOR INCOMING REQUESTS
app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`)
})
