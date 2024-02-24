export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    url.hostname = "api.freegpt4.tech";
    return fetch(new Request(url, request));
  },
};,
};,
};,
};