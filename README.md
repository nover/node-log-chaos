# Log chaos

PoC nodejs docker container that mostly logs in JSON format but once in a while logs with "console.log".
Written in order to test docker json log collector and the using FileBeats to ship the logs to a logstash server

## Docker build

Build this image with the following cmd:
```
docker build -t "yourtag/node-log-chaos" .
```

And then run with
```
▶ docker run "yourtag/node-log-chaos"
```