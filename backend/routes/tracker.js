const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Get all trackers
router.get('/',async(req,res)=>{
    const tracked=await Transaction.find();
    res.json(tracked);
})

// Create a new tracker
router.post('/',async(req,res)=>{
    const trackamt=new Transaction({
        amount:req.body.amount,
        description:req.body.description,
        category:req.body.category,
        type:req.body.type,
        date:req.body.date
    });
        const savedTrack=await trackamt.save();
        res.json(savedTrack);
});



//delete a tracker

router.delete('/:id',async(req,res)=>{
    const track=await Transaction.findByIdAndDelete(req.params.id);
    res.json(track);
})

module.exports=router;