exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('offering')
    table.string('description')
    table.string('teacher')
    table.string('image')
    table.string('time')
    table.string('date')
    table.string('location')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('products')
}
