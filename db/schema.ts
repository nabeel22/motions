import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const inquiries=sqliteTable('inquiries',{id:text('id').primaryKey(),name:text('name').notNull(),email:text('email').notNull(),message:text('message').notNull(),createdAt:integer('created_at').notNull()});
