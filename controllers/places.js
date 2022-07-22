const express = require('express');
const router = express.Router()
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/coffee-cat.jpg'
  }]
  router.get('/',(req, res) => {
    res.render('places/index', {places})
  })
  
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  //Sending and Receiving Your Form Data
  router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})
router.delete('/places/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }
      else {
        res.render('places/edit', { place: places[id] })
      }
    
      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})







module.exports= router
  
  