
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments();
    table.string('title');
    table.integer('year');
    table.string('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies')
};
