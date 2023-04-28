import java.util.*;

class Solution {
    static List<Integer>[] graph;
    static int[] indegree, outdegree;
    static boolean[] visited;

    public String solution(int N, String[] W) {
        graph = new ArrayList[26];
        for (int i = 0; i < 26; i++) {
            graph[i] = new ArrayList<>();
        }
        indegree = new int[26];
        outdegree = new int[26];
        visited = new boolean[26];

        for (int i = 0; i < N; i++) {
            int s = W[i].charAt(0) - 'a';
            int e = W[i].charAt(W[i].length() - 1) - 'a';
            graph[s].add(e);
            indegree[e]++;
            outdegree[s]++;
        }

        boolean hasEulerPath = hasEulerPath();
        if (hasEulerPath) {
            return "Yes";
        } else {
            return "No";
        }
    }

    private boolean hasEulerPath() {
        int startNode = -1;
        int endNode = -1;

        for (int i = 0; i < 26; i++) {
            int diff = indegree[i] - outdegree[i];
            if (Math.abs(diff) > 1) {
                return false;
            } else if (diff == 1) {
                if (endNode != -1) {
                    return false;
                }
                endNode = i;
            } else if (diff == -1) {
                if (startNode != -1) {
                    return false;
                }
                startNode = i;
            }
        }

        if (startNode == -1) {
            startNode = 0;
        }

        dfs(startNode);

        for (int i = 0; i < 26; i++) {
            if (!visited[i] && (indegree[i] > 0 || outdegree[i] > 0)) {
                return false;
            }
        }

        return true;
    }

    private void dfs(int node) {
        visited[node] = true;

        for (int nextNode : graph[node]) {
            if (!visited[nextNode]) {
                dfs(nextNode);
            }
        }
    }
}