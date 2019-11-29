const { Model, snakeCaseMappers } = require("objection");

class Email extends Model {
    static tableName = "emails";

    static get relationMappings() {
        const User = require('./User');
        return {
            emails: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'emails.userId',
                    to: 'users.id'
                }
            }
        }
    };
}

module.exports = Email;