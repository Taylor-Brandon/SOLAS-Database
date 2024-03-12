const { User, SOLAS } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    solas: async() => {
      return await SOLAS.find({});
    }
  },
};

module.exports = resolvers;