import java.util.*;

// 테케 한 개가 안맞습니다 살려주세요
class Solution {
    public int solution(int N, int[] F, int[] S, int[] B, int T, int P, int Q, int W, int O) {

        int firstIndex = findIndex(F, B);
        int secondIndex = findIndex(S, B);
        int difference = secondIndex - firstIndex;


        long enemyW = difference * 60 * P;
        long enemyO = T * Q;
        long gcd = Math.abs(gcd(enemyW, enemyO));
        enemyW /= gcd;
        enemyO /= gcd;

        if (enemyW * O >= enemyO * W) {
            return -1;
        }

        if (difference == 0) {
            return 0;
        }

        long p = O * enemyO * secondIndex * P;
        long q = Q * (W * enemyO - enemyW * O);
        gcd = gcd(p, q);

        p /= gcd;
        q /= gcd;

        return (int) ((p + q) % 1_000_000_009);
    }

    private static int findIndex(int[] array, int[] target) {
        for (int i = 0; i <= array.length - target.length; i++) {
            if (Arrays.equals(Arrays.copyOfRange(array, i, i + target.length), target)) {
                return i + 1;
            }
        }
        return -1;  // 문제의 조건에 반드시 포함되어있다는 조건이 있기 때문에 여기에 올 일은 없음.
    }

    private static long gcd(long a, long b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}