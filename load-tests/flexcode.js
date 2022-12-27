import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    insecureSkipTLSVerify: false,
    noConnectionReuse: false,
    stages: [
        { duration: '1m', target: 100 },
        { duration: '2m', target: 100 },
        { duration: '1m', target: 200 },
        { duration: '2m', target: 200 },
        { duration: '1m', target: 300 },
        { duration: '2m', target: 300 },
        { duration: '1m', target: 400 },
        { duration: '2m', target: 400 },
        { duration: '3m', target: 0 },
    ]
};

export default function () {
    const url = 'https://flexmol.api.allmacoding.com/api/clientes';
    const payload = JSON.stringify({
      email: 'aaa',
      password: 'bbb',
    });
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ""
      },
    };
  
    http.get(url, params);
    sleep(1);
}