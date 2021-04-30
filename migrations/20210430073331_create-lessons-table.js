
exports.up = function(knex) {
  return knex.schema.createTable('lessons', tbl=> {
      tbl.increments();
      tbl.text('name', 128).notNullable();
      tbl.timestamps(true, true)
  })
};

exports.down = function(knex) {
  
};
