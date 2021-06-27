import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: false
    }
});

UserSchema.plugin(uniqueValidator, {
    message: 'Error, expected {PATH} to be unique'
})

const Users = mongoose.model('Users', UserSchema);
export default Users;