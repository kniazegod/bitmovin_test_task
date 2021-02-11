exports.up = async (knex) => {
  await knex.schema.alterTable('task', (table) => {
    table.datetime('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex) => {
  knex.schema.table('order', (table) => {
    table.dropColumn('created_at');
  });
};
