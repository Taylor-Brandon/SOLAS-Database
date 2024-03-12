const { User, Ship } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    ships: async() => {
      return await Ship.find({});
    }
  },
};

module.exports = resolvers;