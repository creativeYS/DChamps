function solution(N, W) {
    let graph = new Array(26);
    for (let i = 0; i < 26; i++) {
        graph[i] = new Array();
    }
    let indegree = new Array(26).fill(0);
    let outdegree = new Array(26).fill(0);
    let visited = new Array(26).fill(false);

    for (let i = 0; i < N; i++) {
        let s = W[i].charCodeAt(0) - 97;
        let e = W[i].charCodeAt(W[i].length - 1) - 97;
        graph[s].push(e);
        indegree[e]++;
        outdegree[s]++;
    }

    if (hasEulerPath()) {
        return "Yes";
    } else {
        return "No";
    }

    function hasEulerPath() {
        let startNode = -1;
        let endNode = -1;

        for (let i = 0; i < 26; i++) {
            let diff = indegree[i] - outdegree[i];
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

        for (let i = 0; i < 26; i++) {
            if (!visited[i] && (indegree[i] > 0 || outdegree[i] > 0)) {
                return false;
            }
        }

        return true;
    }

    function dfs(node) {
        visited[node] = true;

        for (let i = 0; i < graph[node].length; i++) {
            let nextNode = graph[node][i];
            if (!visited[nextNode]) {
                dfs(nextNode);
            }
        }
    }
}
