/*
 * What is happening here?
 *
 * This function is as-is from scaffold
 * It has not been edited after it was generated
 * though it serves the purpose. Read more: [LINK]
 * 
 * 
 * 1. Create a durable function client based on request context
 * 2. Call the orchestrator using the client's startNew().
 *    The orchestrator func name is passed as param to startNew().
 *    A req.body can be passed to startNew() which is forwarded to the orcegstrator
 * 3. Returns an set of data that can be used to check the status of
 *    the orch func or even cancle the process before it's complete
 *
 */

 /* 
  * TODO:
  * 
  * Leave it how you found it 🙄
  * You're on your own from here if you edit 🤪
  * 
  */

const df = require("durable-functions");

module.exports = async function (context, req) {
    const client = df.getClient(context);
    const instanceId = await client.startNew(req.params.functionName, undefined, req.body);

    context.log(`Started orchestration with ID = '${instanceId}'.`);

    return client.createCheckStatusResponse(context.bindingData.req, instanceId);
};