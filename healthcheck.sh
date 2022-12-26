#!/bin/bash
echo 'EXECUTANDO HEALTHCHECK';

randomInterval=$(( ( RANDOM % 10 )  + 1 ))
sleep "$randomInterval";

timeout=5
host=http://localhost:3000/health

curl --fail --connect-timeout "$timeout" --max-time "$timeout" "$host" ||  ps -afx |grep npm | awk '{print $1}' | xargs kill -9;
