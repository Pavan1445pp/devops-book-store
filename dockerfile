FROM nginx:alpine
COPY app/ /usr/share/nginx/index.html/
EXPOSE 80
