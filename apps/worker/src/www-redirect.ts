/** Redirect the alternate hostname to the canonical apex domain. */
export default {
  fetch(request: Request): Response {
    const source = new URL(request.url);
    const target = new URL(source.pathname + source.search, 'https://providerlist.dev');
    return Response.redirect(target.toString(), 301);
  },
};
