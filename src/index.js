'use strict';

const mysqlx = require('@mysql/xdevapi');

const options = {
    host: 'localhost',
    port: 33060,
    password: 'pVT1XtreE25b',
    user: 'root'
};

mysqlx
    .getSession(options)
    .then(session => {
        return session
            .createSchema('mySchema')
            .then(schema => ({ schema, session }))
    })
    .then(ctx => {
        return ctx.schema
            .createCollection('myCollection')
            .then(collection => Object.assign(ctx, { collection }))
    })
    .then(ctx => {
        return Promise
            .all([
                ctx.collection
                    .add({ baz: { foo: 'bar' } }, { foo: { bar: 'baz' } })
                    .execute(),
                ctx.collection
                    .find('baz.foo = "bar"')
                    .execute(row => console.log(row)),
                ctx.collection
                    .remove('foo.bar = "baz"')
                    .execute(),
                ctx.schema
                    .dropCollection('myCollection')
            ])
            .then(() => ctx)
    })
    .then(ctx => {
        return ctx.session
            .dropSchema('mySchema')
            .then(() => ctx);
    })
    .then(ctx => {
        ctx.session.close();
        process.exit(0);
    })
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    });
