export default (sequelize, DataTypes) => {
  return sequelize.define(
    'item',
    {
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      complete_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      create_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      modify_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      delete_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
};
