/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysdiagrams', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    principal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    diagram_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    definition: {
      type: 'VARBINARY',
      allowNull: true
    }
  }, {
    tableName: 'sysdiagrams'
  });
};
