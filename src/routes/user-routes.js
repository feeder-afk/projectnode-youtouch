const { Router } = require('express');
const router = Router();

const Post = require( '../models/post' );
const User = require( '../models/user' );

//read all
router.get('/', async (req, res) => {
    let users = await User.find();

    res.json(users);
});

//new user
router.post('/', async(req, res) => {     
    let { username, usermail } = req.body;
    let _res = {};

    if( !username || !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test( usermail) ){
        res.json({
            'error': true,
            'msg': 'Los datos ingresados no son válidos'
        });
    }else{
        let us = new User({ username, usermail });   
        res.json(us);
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

//read user
router.get('/:id', async (req, res) => {
    /*
    let user = await User.findById( req.params.id );
    res.json(user);
    */
});


//create or update user
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

//delete user
router.delete('/:id', async(req, res ) => {
    /*
    await User.findByIdAndRemove( req.params.id );
    res.json({
        "msg" : "deleted"
    });
    */
});

module.exports = router;