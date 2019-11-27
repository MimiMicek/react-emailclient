exports.up = function(knex) {
    return knex.schema
      .createTable('users', (table) => {
          table.increments('id');
          table.string('username').unique();
          table.string('email');
          table.timestamp('created_at_timestamp').defaultTo(knex.fn.now());
          table.string('password');
      })
     
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users');
  };
  