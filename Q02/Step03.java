class Step03 {
    public int solution(int N, int[] F, int[] S, int[] B, int T) {
        int cnt = 0;
        int first = 0;
        for(int i = 0; i < N; i++) {
            if (F[i] == B[cnt]) {
                cnt++;
                if (cnt == B.length) {
                    first = i - 6;
                    break;
                }
            } else {
                cnt = 0;
            }
        }

        cnt = 0;
        int second = 0;
        for(int i = 0; i < N; i++) {
            if (S[i] == B[cnt]) {
                cnt++;
                if (cnt == B.length) {
                    second = i - 6;
                    break;
                }
            } else {
                cnt = 0;
            }
        }
        int diff = first - second;
        if (diff == 0) {
            return 0;
        } else if (diff < 0) {
            int gcd = Math.abs(gcd(diff * 60, T));
            return (diff * 60) / gcd - T / gcd;
        } else {
            int gcd = gcd(diff * 60, T);
            return (diff * 60) / gcd + T / gcd;
        }
    }

    int gcd(int a, int b) {
        if(b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }
}