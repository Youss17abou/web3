const router = require('express').Router()
const Person = require('../models/person')

// Data. This emulates a datastore
/* const allPersons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada lovelace",
    number: "39-44-5232323",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-2345345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-64234122",
  },
] */


router.get("/", (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

router.get("/:id", (req, res, next) => {
  Person.findById(req.params.id).then(person => {
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  }).catch(error => next(error))
})

router.delete("/:id", (req, res,next) => {
  Person.findByIdAndDelete(req.params.id).then(result => {
    if (result) {
      res.status(204).end()
    } else {
      res.status(404).end()
    }
  }).catch(error => next(error))
})

router.post("/", (req, res, next) => {
  const personPayload = req.body

  if (!personPayload.name || !personPayload.number) {
    return res.status(422).json({ error: "name and number must be present" })
  }

  const newPerson = new Person({
    name: personPayload.name,
    number: personPayload.number,
  })

  newPerson.save().then(savedPerson => {
    res.json(savedPerson)
  }).catch(error => next(error))
})

router.put("/:id", (req, res, next) => {
  const personPayload = req.body

  if (!personPayload.name || !personPayload.number) {
    return res.status(422).json({ error: "name and number must be present" })
  }

  Person.findByIdAndUpdate(
    req.params.id,
    { name: personPayload.name, number: personPayload.number },
    { new: true, runValidators: true, context: 'query' }
  ).then(updatedPerson => {
    if (updatedPerson) {
      res.json(updatedPerson)
    } else {
      res.status(404).end()
    }
  }).catch(error => next(error))
})


module.exports = router
