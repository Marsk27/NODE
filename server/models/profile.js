const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    company: {type : String},
    website: {type: String},
    location: {type: String},
    status : { type : String, required: true},
    skills: { type:[String], required: true},

    bio:{type: String},
    githubusername:{type:String},
    // exp: multiple entries of exps
    expersience :[
        {title: {type:String, requierd:true},
        company:{type: String,requierd:true},
        location:{type:String},
        from:{type:Date, requierd:true},
        to: {
            type: Date,
          },
          current: {
            type: Boolean,
            default: false,
          },
          description: {
            type: String,
          },
        },
      ],
      // edu : multiple entries of edu entries
      education: [
        {
          school: {
            type: String,
            required: true
          },
          degree: {
            type: String,
            required: true
          },
          fieldofstudy: {
            type: String,
            required: true
          },
          from: {
            type: Date,
            required: true
          },
          to: {
            type: Date
          },
          current: {
            type: Boolean,
            default: false
          },
          description: {
            type: String
          }
        }
      ],
      social: {
        youtube: {
          type: String,
        },
        twitter: {
          type: String,
        },
        facebook: {
          type: String,
        },
        linkedin: {
          type: String,
        },
        instagram: {
          type: String,
        }
      },
      date: {
        type: Date,
        default: Date.now,
      },
    });
    module.exports = mongoose.model("proifile",profileSchema);
    