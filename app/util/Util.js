/**
 * Created by huibei on 17/2/15.
 */

export function randomNumber(Min,Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}