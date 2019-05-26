/*
 * What is happening here?
 * 
 * 1. Return an orchestrator call which is passed a
 *    serverless function
 * 2. The req.body passed to the trigger function can be
 *    retrived here using context.df.getInput()
 *
 */

 /* 
  * TODO:
  *
  * 1. Create a schedule with createTimer using date from the request body
  * 2. Call the sendEmail activity function whenever the schedule is due 
  *    and pass input as payload
  * 
  */

const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {

    const input = context.df.getInput()
    
    // TODO -- 1
    
    // TODO -- 2
});