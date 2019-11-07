
exports.up = function(knex) {
  return knex.schema
    .createTable('species', table => {
        table.increments();

        table.string('name', 255).notNullable();
    })
    .createTable('animals', table => {
        table.increments()
        table.string('name', 255)
            .notNullable()
        table.integer('species_id')
            .unsigned()
            .references('id')
            .inTable('species')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

    })
    .createTable('zoos', table => {
        table.increments();
        table.string('name', 255)
            .notNullable()
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
    .createTable('animal_zoos', table => {
        table.increments();
        table.date('from')
        table.date('to')
        table.integer('zoo_id')
            .unsigned()
            .references('id')
            .inTable('zoo')
            .integer('animal_id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  
};
