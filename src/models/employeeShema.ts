import {Schema} from 'mongoose';


interface User {
    name:string;
    password: string;
    email: string;
}

export const schama = new Schema<User> ({
    name: {
        type:String,
        requierd: true
    },
    password: {
        type:String,
        requierd: true
    },
    email: {
        type:String,
        requierd: true
    }

});
