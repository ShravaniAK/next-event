import {Schema, model, models} from 'mongoose';

const UserSchema=new Schema({
    clerkId:{Type:String,required:true,unique:true},
    email:{Type:String,required:true,unique:true},
    username:{Type:String,required:true,unique:true},
    firstName:{type:String,required:true},
    lasttName:{type:String,required:true},
    photo:{type:String,required:true},
})

const User=models.User|| model('User',UserSchema);

export default User;