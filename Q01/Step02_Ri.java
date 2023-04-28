class Solution {
    public int solution(int H, int W, int[] D) {
        int answer = 0;
        int give = 0;
        for(int length : D) {
            if (length >= H) {
                answer++;
                give = length - H;
                continue;
            }
            if (length + give >= H) {
                answer++;
            }
            give = 0;
        }
        return answer;
    }
}