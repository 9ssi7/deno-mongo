FROM denoland/deno:alpine

ARG SERVER_PORT=8080

EXPOSE $SERVER_PORT

WORKDIR /app
USER deno

ADD . .
RUN deno cache main.ts

CMD ["run", "--allow-net", "--allow-env", "main.ts"]