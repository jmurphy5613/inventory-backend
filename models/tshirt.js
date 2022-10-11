module.exports = (sequelize, DataTypes) => {
    const Tshirt = sequelize.define({
        color: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isCheckedOut: {
            type: DataTypes.BOOLEAN
        },
        dataCheckedOut: {
            type: DataTypes.INTEGER
        }
    })
    return Tshirt
}