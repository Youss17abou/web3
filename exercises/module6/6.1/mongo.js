const mongoose = require('mongoose')
require("dotenv").config();

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

const url =
  `mongodb+srv://${user}:${password}@clusterweb3.0ssed.mongodb.net/phonebook?retryWrites=true&w=majority&appName=ClusterWeb3`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  });

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(person => {
          console.log(person.name, person.number)
        })
        mongoose.connection.close()
      })
} else if (process.argv.length === 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
      });
      
      person.save().then(() => {
        console.log('person saved!');
        mongoose.connection.close();
      });
} else {   
    console.log('wrong number of arguments')
    process.exit(1)
}