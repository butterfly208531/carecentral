const DemoRequest = require("../models/DemoRequest");

const submitDemo = async (req, res) => {
    try {
        const {
            hospitalName,
            contactPerson,
            email,
            phone,
            facilityType,
            branches,
            message,
        } = req.body;

        if (!hospitalName || !contactPerson || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields: hospitalName, contactPerson, email, and phone.",
            });
        }

        const demo = await DemoRequest.create({
            hospitalName: hospitalName.trim(),
            contactPerson: contactPerson.trim(),
            email: email.trim(),
            phone: phone.trim(),
            facilityType: facilityType ? facilityType.trim() : undefined,
            branches: branches ? branches.trim() : undefined,
            message: message ? message.trim() : undefined,
        });

        return res.status(201).json({
            success: true,
            message: "Demo request submitted successfully.",
            data: demo,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error. Please try again later.",
        });
    }
};

module.exports = {
    submitDemo,
};