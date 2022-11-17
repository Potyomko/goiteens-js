const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
  console.table(friends);
  
  for (const friend of friends) {
    console.log(friend);
  }

  const nums = [1,2,3,4,6]
  console.log(nums);
  for (let num of nums) {
    num += 1
  }
  console.log(nums);

  for (const friend of friends) {
    console.log(friend);
    friend.newProp = 123365;
  }
  console.table(friends);

//   const findFriendByName = function(allFriends,name) {
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         if (friend.name === name) {
//             console.log('Урааааа, знайшли!');
//         } else {
//             console.log('Упс, не знайшли!');
//         }
//     }
//   }
  console.log(findFriendByName(friends, 'Poly'));


  const findFriendByName = function (allFriends) {
  const friendsName = [];
    for (const friend of allFriends) {
      console.log(friend.name);
      friendsName.push(friend.name);
    }
    return friendsName
  };
  
  console.log(findFriendByName(friends));