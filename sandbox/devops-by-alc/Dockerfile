############################################################
# Dockerfile to build Application container image
# Based on Node:Carbon
############################################################

FROM node:carbon

ENV work_dir /usr/src/user-manager

RUN apt-get update
ADD userManager/package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p ${work_dir} && cp -a /tmp/node_modules ${work_dir}

WORKDIR ${work_dir}
ADD userManager ${work_dir}

CMD ["npm", "start"]

EXPOSE 3000