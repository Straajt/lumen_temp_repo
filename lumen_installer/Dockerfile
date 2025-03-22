FROM node:18-alpine as ui
WORKDIR /app
COPY ui /app
RUN npm install && npm run build

FROM alpine:3.18
COPY --from=ui /app/dist /www
COPY run.sh /run.sh
COPY lumen_assets /lumen_assets
RUN chmod +x /run.sh
CMD [ "/bin/sh", "/run.sh" ]
