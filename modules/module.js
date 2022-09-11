const express = require("express");

const dot = require("dotenv").config();

const Sequelize = require("sequelize");

const ejs = require("ejs");

const url = require("url");

const jwt = require("jsonwebtoken");

const session = require("express-session");

const mysql2 = require("mysql2");

const mailer = require("nodemailer");

const bcrypt = require("bcrypt");

const moment = require("moment");

module.exports = {
    express,
    dot,
    Sequelize,
    ejs,
    url,
    jwt,
    session,
    mysql2,
    mailer,
    bcrypt,
    moment,
};
