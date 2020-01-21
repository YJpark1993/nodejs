let date = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
let rule = [31,29,31,30,31,30,31,31,30,31,30,31]
function solution(a, b) {
    var answer;
    let day=0
    for(let i=0; i<a-1; i++) {
        day += rule[i];
    }
    answer = (day+b-1)%7
    return date[answer];
}