import { RequestEvent } from "@sveltejs/kit";

export const load = async (event: RequestEvent) => {
  console.log(await event.locals.getSession());
  return {
    session: event.locals.getSession(),
  };
};
