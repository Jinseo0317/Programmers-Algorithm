function solution(array) {
    var answer = 0;
    let findSeven = 0;
    let findArray = array.join("").split("");
    for(i = 0; i < findArray.length; i++){
        if(findArray[i] == '7'){
            answer += 1;
        }
    }
    return answer;
}
