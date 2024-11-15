const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: false
        },
        id: {
            type: Number,
            required: [true, "Id is required"],
            default: 1,
        },
        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;