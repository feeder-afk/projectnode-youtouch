const { Router } = require('express');
const mongoose = require('mongoose');

const router = Router();

const Post = require( '../models/post' );
const User = require( '../models/user' );

//read all posts
router.get('/', async (req, res) => {
    let posts = await Post.find().populate('user');    
    res.json(posts);
});

//new post
router.post('/', async(req, res) => {     
    let { username, usermail, userpost } = req.body;
    let _res = {};

    if( !userpost || !username || !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test( usermail) ){
        _res = {
            'error': true,
            'msg': 'Los datos ingresados no son válidos'
        };
    }else{     
        let us = await User.findOne( { mail: usermail }).select("_id").lean();
        //let _id = await User.countDocuments({ mail: usermail }, function (err, u) {});
        //_res = us;       
        
        if(  !us  ){
            us = new User({ 
                _id: new mongoose.Types.ObjectId(),
                name: username,
                mail : usermail
            });  

            await us.save();           
        }
        
        var po = new Post({
            _id: new mongoose.Types.ObjectId(),
            content: userpost,
            user: us._id
        });

        await po.save();
        
        _res = {
            'success': true
        };
    }

    res.json( _res );
    
    /*
    let us = new User({ name, mail });    
    await us.save();
    res.json({
        "msg" : "accepted"
    });
    */
});

//read post
router.get('/:id', async (req, res) => {
    /*
    let user = await User.findById( req.params.id );
    res.json(user);
    */
});


//create or update post
router.put('/:id', async(req, res) => {
    /*
    let {name, mail} = req.body;
    let us = {name, mail}
    await User.findByIdAndUpdate( req.params.id, us );
    res.json({
        "msg" : "updated"
    });
    */
});

//delete post
router.delete('/:id', async(req, res ) => {    
    await Post.findByIdAndRemove( req.params.id );
    res.json({
        "msg" : "deleted"
    });
});

module.exports = router;