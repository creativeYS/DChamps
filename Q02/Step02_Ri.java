class Step02 {
    public int solution(int N, int[] F, int[] B) {
        int cnt = 0;
        for(int i = 0; i < N; i++) {
            if (F[i] == B[cnt]) {
                cnt++;
                if (cnt == B.length) {
                    return i - 6;
                }
            } else {
                cnt = 0;
            }
        }
        return -1;
    }
}