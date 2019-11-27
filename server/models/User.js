const { Model, snakeCaseMappers } = require('objection');

class User extends Model{
    //we dont the tables and the models to have the same name
    static get tableName(){
        return 'users';
    }

 /*    static get relationMappings() {
        const Address = require('./Address');
        return {
            addresses: {
                relation: Model.HasManyRelation,
                modelClass: Address,
                join: {
                    from: 'users.id',
                    to: 'addresses.userId'
                }
            }
        }
    }; */
}


module.exports = User;