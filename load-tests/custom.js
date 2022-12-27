import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    insecureSkipTLSVerify: false,
    noConnectionReuse: false,
    stages: [
        { duration: '15s', target: 100 },
        { duration: '30s', target: 2500 },
        { duration: '15s', target: 100 },
    ]
};

export default function () {
    http.get('http://localhost');
    sleep(1);
}