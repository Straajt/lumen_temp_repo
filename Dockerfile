FROM alpine:3.18
COPY www /www
COPY run.sh /run.sh
RUN chmod +x /run.sh
CMD [ "/bin/sh", "/run.sh" ]
