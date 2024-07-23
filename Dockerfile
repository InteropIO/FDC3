FROM --platform=linux/amd64 node:18-alpine as builder
WORKDIR /home/node/app

COPY ./toolbox/fdc3-workbench .
RUN npm install
RUN npm run build

FROM --platform=linux/amd64 nginx
COPY --from=builder /home/node/app/build /usr/share/nginx/html
# COPY ./services/frontend/conf/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80