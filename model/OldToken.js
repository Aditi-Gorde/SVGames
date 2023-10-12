const mongoose = require("mongoose");

const oldTokenModel = mongoose.Schema(
  {
    token: {
      type: String
    },
},
{
  timestamps: true,
}
);

oldTokenModel.index({ created_at: 1 }, { expireAfterSeconds: 7200 });
module.exports = mongoose.model("oldToken", oldTokenModel);