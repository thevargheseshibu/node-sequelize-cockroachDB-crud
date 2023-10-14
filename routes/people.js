// routes/people.js
const express = require("express");
const People = require("../models/people");

const router = express.Router();

router.get("/insert", (req, res) => {
  // Insert Data
  People.create({
    name: 'John Doe',
    phoneNumber: 1234567890,
  }).then(newPerson => {
    console.log('New person created:', newPerson);
    res.json(newPerson);
  }).catch(error => {
    console.error('Error creating a person:', error);
    res.status(500).json({ error: 'Error creating a person' });
  });
});

router.get("/read", (req, res) => {
  // Read Data
  People.findAll().then(people => {
    console.log("people", people);
    res.json(people);
  }).catch(error => {
    console.error('Error fetching people:', error);
    res.status(500).json({ error: 'Error fetching people' });
  });
});

app.put('/people/:id', (req, res) => {
  const id = req.params.id; // Get the ID from the request parameters
  const updatedData = req.body; // Assuming you send the updated data in the request body

  // Use Sequelize or your preferred database query method to update the person's information
  People.update(updatedData, {
    where: { id: id }
  })
  .then(() => {
    res.status(200).send('Person updated successfully');
  })
  .catch(error => {
    res.status(500).send('Error updating person: ' + error);
  });
});


app.delete('/people/:id', (req, res) => {
  const id = req.params.id; // Get the ID from the request parameters

  // Use Sequelize or your preferred database query method to delete the person
  People.destroy({
    where: { id: id }
  })
  .then(() => {
    res.status(200).send('Person deleted successfully');
  })
  .catch(error => {
    res.status(500).send('Error deleting person: ' + error);
  });
});


module.exports = router;
