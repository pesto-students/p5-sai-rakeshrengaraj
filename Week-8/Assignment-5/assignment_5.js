const findJudge = (N, trust) => {
  // keep track of how many likes the element gives
  let likesCountList = {};
  //keep track of how many likes the element receives
  let beingLikedCountList = {};

  //hash the key from 1 to N
  for (let i = 1; i <= N; i++) {
    likesCountList[i] = 0;
    beingLikedCountList[i] = 0;
  }

//   console.log("likesCountList",likesCountList)
//   console.log("beingLikedCountList",beingLikedCountList)
  //loop through trust to hash value to hashes
  for (let ele of trust) {
    // console.log("ele",ele)
    likesCountList[ele[0]]++;
    beingLikedCountList[ele[1]]++;
  }

//   console.log("likesCountListTrust",likesCountList)
//   console.log("beingLikedCountListTrust",beingLikedCountList)

  //variable to store potential judge

  let judge = 0;
  //if the element doesn't give out any likes
  //it is the potantial judge
  for (key in likesCountList) {
    // console.log("Key",key)
    if (likesCountList[key] === 0) {
        judge = key;
    }
  }

  //if the potential judge receives likes from everybody other than itself
  //it means it is the judge
  //otherwise judge doesn't exist
//   console.log("judge", judge)
  if (beingLikedCountList[judge] === N - 1) return judge;
  else return -1;
};

console.log(findJudge(3,[[1,3],[2,3]]))
console.log(findJudge(3,[[1,3],[2,3],[3,1]]))