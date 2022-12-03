import mongoose, {Schema} from 'mongoose';


export interface User {
    name:string;
    password: string;
    email: string;
}

const UserSchema: Schema = new Schema<User> ({
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

export default mongoose.model<User>("UserData", UserSchema);
