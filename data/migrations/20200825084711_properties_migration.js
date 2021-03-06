
exports.up = async function(knex) {
    await knex.schema.createTable('properties', function(table) {
        table.increments('id');
        table.string("street_address", 128).notNullable();
        table.string("city").notNullable();
        table.string("zip").notNullable();
        // table.string("property_type").notNullable();
        // table.string("leaseable_area").notNullable();
        // table.string("parking").notNullable();
        table.string("bedrooms").notNullable();
        table.string("beds").notNullable();
        table.string("guests_included").notNullable();
        table.string("minumum_nights").notNullable();
        table.string("maximum_nights").notNullable();
        table.string("bathrooms").notNullable();
        table.string("accomodates").notNullable();
        // table.string("upgrades")
        // table.string("special_remarks")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("properties");
};
