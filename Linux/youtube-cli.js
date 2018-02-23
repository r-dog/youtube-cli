const program = require('commander');

const search = require('./search');

program
    .version("1.0.0")
    .description("Youtube Command-Line Tool");

program
    .command('search <query>')
    .alias('-s')
    .description("Search videos")
    .action(query => 
        search(query)
    );

program.parse(process.argv);