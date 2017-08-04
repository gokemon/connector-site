// this is called a barrel file to export stuff as it imports it


export * from './shared.module';
export * from './services'; // makes the api & user services available
export * from './layout'; // makes the header & footer componts available
export * from './list-errors.component'; // used in all forms 
export * from './models'; // makes the errors & user model availble, 
// I'm sure that I will need to create other models, which will go here

// ah so each folder that has a index.ts barrel file rolls up its things 
// and offers them here
