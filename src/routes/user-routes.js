const { Router } = require('express');
const mongoose = require('mongoose');

const router = Router();

const Post = require( '../models/post' );
const User = require( '../models/user' );

//read all Users
router.get('/', async (req, res) => {
    let posts = await User.find()        
    res.json(posts);
});

//crear usuario
router.post('/', async(req, res) => {     
    let { username, usermail } = req.body;
    let _res = {};

    if( !username || !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test( usermail) ){
        _res = {
            'error': true,
            'msg': 'Los datos ingresados no son válidos'
        };
    }else{     
        let us = await User.findOne( { mail: usermail }).select("_id").lean();
        
        if(  !us  ){
            us = new User({ 
                _id: new mongoose.Types.ObjectId(),
                name: username,
                mail : usermail
            });  

            await us.save();           
        }else{
            _res = {
                'error': true,
                'msg': 'El usuario ya existe, elija actualizar'
            };
        }

        _res = {
            'success': true
        };
    }

    res.json( _res );
    
});


//actualizar usuario
router.put('/:id', async(req, res) => {
    let {username, usermail} = req.body;
    let _res = {};
    
    if( !username || !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test( usermail) ){
        _res = {
            'error': true,
            'msg': 'Los datos ingresados no son válidos'
        };
    }else{
        let us = await User.findOne( { mail: usermail }).select("_id").lean();

        if(  !us  ){
            us = new User({ 
                _id: new mongoose.Types.ObjectId(),
                name: username,
                mail : usermail
            });  

            await us.save();
        }else{
            us = {username, usermail}
            await User.updateOne( req.params.id, us );
        }

        _res = {
            'success': true
        };
    }
    
    res.json(_res);
});


//delete user & posts
router.delete('/:id', async(req, res ) => {        
    await Post.deleteMany( { user : { _id : req.params.id } } );
    await User.deleteOne( { _id : req.params.id });
    res.json({
        "msg" : "deleted"
    });
});

//get user
/*
router.get('/:id', async (req, res) => {
    user = await User.findOne( { _id : req.params.id } );
    let _res = {};
    if( user )
        _res = user;
    else
        _res = {'error': true };    

    return res.json(_res);
});
*/

module.exports = router;