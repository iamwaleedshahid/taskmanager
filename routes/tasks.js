const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const Task = require('../models/Task')

router.get('/', auth, async (req, res) => {

    try {
        const { user } = req
        const { id } = user
        const tasks = await Task.find({ id: user })
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.post('/', auth, async (req, res) => {
    try {
        const { user } = req
        const { id } = user
        const raw = {
            "user": id,
            ...req.body
        }
        const task = await Task.create(raw)
        res.status(201).json({ task })
    }
    catch (error) {
        console.log(error)
    }

})


router.get('/:id', auth, async (req, res) => {
    const { user } = req
    if (!user) {
        return res.status(401).json({ msg: 'Not Logged in' })
    }
    try {
        const { id } = req.params
        const task = await Task.findOne({ _id: id })
        if (!task) {
            return res.status(404).json({ msg: `No task found with id: ${id}` })
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

})


router.patch('/:id', auth, async (req, res) => {
    try {
        const {user} = req
        const {id: {userId}} = user
        const raw = {
            "user":userId,
            ...req.body
        }
        const {id} = req.params
        const task = await Task.findOneAndUpdate({_id:id}, raw, {
            new:true,
            runValidators:true,
        })

        if (!task) {
            return res.status(404).json({msg: `No task found with id: ${id}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

router.delete('/:id', auth, async (req, res) => {
    const { user } = req
    if (!user) {
        return res.status(401).json({ msg: 'Not Logged in' })
    }
    try {
        const {id} = req.params
        const task = await Task.findOneAndDelete({_id: id})
        if(!task) {
            return res.status(404).json({msg: `No task found with id: ${id}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
})


module.exports = router