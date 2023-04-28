class Solution {
    public int solution(int H, int W, int[] D) {
        int answer = 0;
        for(int length : D) {
            if (length >= H) {
                answer++;
            }
        }
        return answer;
    }
}