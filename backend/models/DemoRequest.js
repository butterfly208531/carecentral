const mongoose = require("mongoose");

const demoRequestSchema = new mongoose.Schema(
{
    hospitalName: {
        type: String,
        required: true,
    },

    contactPerson: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
        match: [/^[+0-9\s\-()]{7,20}$/, "Please enter a valid phone number"],
    },

    facilityType: {
        type: String,
    },

    branches: {
        type: String,
    },

    message: {
        type: String,
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("DemoRequest", demoRequestSchema);