// src/hooks.server.ts
import { verifyAuth } from '$lib/server/middleware/auth';

export const handle = async ({ event, resolve }) => {

  // 1. Log the incoming request — locals are empty here
 // logRequest(event);

  // 2. Verify auth — this sets event.locals.user
  await verifyAuth(event);

  // 3. Log locals — now you can see user data if authenticated
  //logLocals(event);

  // 4. Continue to the route
  return resolve(event);
};
