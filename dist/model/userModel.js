"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    avatar: {
        type: String
    },
    status: {
        type: String
    },
    user: [{
            type: mongoose_1.Types.ObjectId,
            ref: "user"
        }],
    userHistory: [{
            type: mongoose_1.Types.ObjectId,
            ref: "userHistory"
        }],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("user", userModel);
