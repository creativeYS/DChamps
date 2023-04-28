import java.util.*;
import java.util.stream.Collectors;

class Setp01 {
    public int solution(int[] F) {

        Set<Integer> fSet = Arrays.stream(F).boxed().collect(Collectors.toSet());
        fSet.remove(Integer.valueOf(0));

        if (F.length == fSet.size()) {
            return 1;
        } else {
            return 0;
        }
    }
}