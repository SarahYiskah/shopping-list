const express = require('express')
const router = express.Router()

//Bring in Model
const Item = require('../../models/Item')

//CREATE ROUTES

//@route GET api/items
//@description Get all items
//@access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1}) //sort items by date - descending order
    .then(items => res.json(items))
})

//@route POST api/items
//@description Create an item
//@access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })
  newItem.save()
    .then(item => res.json(item))
})

//@route DELETE api/items
//@description Delete an item
//@access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))

})

module.exports = router
