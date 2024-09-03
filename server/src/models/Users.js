import mongoose from 'mongoose';
//import { SavedRecipes } from '../../../client/src/pages/saved-recipes';
const UserSchema =new mongoose.Schema({
    username: {type:String, required:true , unique:true},
    password: {type:String, required:true},
    SavedRecipes:[{type:mongoose.Schema.Types.ObjectId,ref:"recipes"}],
});

export const UserModel = mongoose.model("users",UserSchema);