import java.util.*;

class Solution {
    public int solution(int H, int W, int[] D) {
        int answer = 0;
        TreeMap<Integer, Integer> give = new TreeMap<>();
        for(int length : D) {
            if (length >= H) {
                answer++;
                int idx = Math.min(H - 1, length - H);
                give.put(idx, give.getOrDefault(idx, 0) + 1);
            } else {
                int need = H - length;
                Map.Entry<Integer, Integer> entry = give.ceilingEntry(need);
                if (entry != null && entry.getValue() > 0) {
                    answer++;
                    give.put(entry.getKey(), entry.getValue() - 1);
                    if (entry.getValue() == 1)
                        give.remove(entry.getKey());
                }
            }
        }
        return answer;
    }
}

-----------------------

        import java.util.*;

class Solution {
    public int solution(int H, int W, int[] D) {
        int answer = 0;
        int[] give = new int[H];
        for(int length : D) {
            if (length >= H) {
                answer++;
                give[Math.min(H - 1, length - H)]++;
            } else {
                int need = H - length;
                for (int i = need; i < H; i++) {
                    if (give[i] > 0) {
                        answer++;
                        give[i]--;
                        break;
                    }
                }
            }
        }
        return answer;
    }
}