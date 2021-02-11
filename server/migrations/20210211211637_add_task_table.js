exports.up = async (knex) => {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  await knex.schema.createTable('task', (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.boolean('done').defaultTo(false);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('task');
};
