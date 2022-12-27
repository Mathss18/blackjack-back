import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    insecureSkipTLSVerify: false,
    noConnectionReuse: false,
    stages: [
        { duration: '1m', target: 100 },
        { duration: '2m', target: 100 },
        { duration: '1m', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(99)<150'] /* 99% das requests devem completar antes de 150ms */
    }
};

export default function () {
    http.get('http://localhost');
    sleep(1);
}