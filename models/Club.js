const mongoose = require("mongoose");
const slugify = require("slugify");

const clubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A club must have a name"],
      unique: true,
      trim: true,
    },
    slug: String,
    founed: Date,
    league: {
      type: String,
      required: [true, "The club needs to belong to a league "],
    },
    description: String,
    honours: {
      type: Number,
      default: 0,
    },
    ratingsAverage: {
      type: Number,
      default: 4,
      set: (val) => Math.round(val * 10) / 10,
    },
    fans: {
      type: Number,
      required: [true, "The club must have fans"],
    },
    ranking: Number,
    photo: String,
    headCoach: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: "A club must have a head coach",
    },
    stadium: {
      type: mongoose.Schema.ObjectId,
      ref: "Stadium",
      required: "A club must have a stadium",
    },
  }
  //   {
  //     toJSON: { virtuals: true },
  //     toObject: { virtuals: true },
  //   }
);

clubSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

clubSchema.pre(/^find/, function (next) {
  this.populate({
    path: "headCoach",
    select: "name nationality",
  }).populate({
    path: "stadium",
    select: "name capacity",
  });
});

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;
