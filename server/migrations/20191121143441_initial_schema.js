exports.up = function(knex) {
    return knex.schema
      .createTable('users', (table) => {
          table.increments('id');
          table.string('username').unique();
          table.string('email');
          table.timestamp('created_at_timestamp').defaultTo(knex.fn.now());
          table.string('password');
      })
      .createTable('emails', (table) => {
        table.increments('id');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.string('to');
        table.string('from');
        table.string('subject');
        table.string('message');
        table.timestamp('sent_at').defaultTo(knex.fn.now());
      });
     
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('emails')
      .dropTableIfExists('users');
  };
  