module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user_routines",
    {
      routine_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      daily_check: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    //timestamps는 생성일과 수정일, paranoid는 삭제일(복구용)입니다
    // charset과 collate를 다음과 같이 해야 한글이 깨지지 않습니다.
    {
      timestamp: false,
      underscored: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
};
