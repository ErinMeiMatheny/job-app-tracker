'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job_track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  job_track.init({
    user_id: DataTypes.INTEGER,
    company_name: DataTypes.STRING,
    job_title: DataTypes.STRING,
    date_applied: DataTypes.DATE,
    city: DataTypes.STRING,
    company_responded: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'job_track',
  });
  return job_track;
};