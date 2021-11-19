const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const results = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  // TODO: Log the answer in a database
  results.push(`${answer} loves `);
  
  rl.question("What's an activity you like doing? ", (answer) => {
    results.push(`${answer} while listening to `);
  
    rl.question("What do you listen to while doing that? ", (answer) => {
      results.push(`${answer}, `);
  
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        results.push(`before having ${answer} `);
  
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          results.push(`with ${answer}, `);
  
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            results.push(`and watching ${answer}, `);
  
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              results.push(`and thinking of my superpower of ${answer}.`);
              console.log(results.join(""));
              rl.close();
            });
          });
        });
      });
    });
  }); 
});