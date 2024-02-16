import { Context } from "hono"
import { Request } from "express-validator/src/base"
import { getCookie } from "hono/cookie"

export const convertContext = async (c: Context): Promise<Request> => {
  return {
    body: await c.req.json(),
    cookies: getCookie(c),
    headers: c.req.raw.headers,
    params: c.req.param() as Record<string, any>,
    query: c.req.queries(),
  }
}