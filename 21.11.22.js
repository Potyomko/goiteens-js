const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'посилання на зображення',
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};
console.log(profile.name, profile.tag, profile.location);
const {name, tag, location, stats: {followers, views, likes}} = profile;
// const {followers, views, likes} = stats;
console.log(name, tag, location, followers, views, likes);
// console.log(followers, views, likes);



const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

  console.table(friends);
// Отримуємо імена тільки тих друзів які онлайн
const getOnlineFriends = function (oldFriends) {
    const onlineFriends = [];

    for (const friend of oldFriends) {
        if (friend.online) {
            onlineFriends.push(friend.name)
        }
    }

    return onlineFriends;
}
console.log(getOnlineFriends(friends));



const getFriendsByStatus = function (allFriends) {
    const friendByStat = {
        onlineFriends: [],
        offlineFriends: [],
      }
      for (const friend of allFriends) {
        if (friend.online) {
            friendByStat.onlineFriends.push(friend.name)
        } else{
            friendByStat.offlineFriends.push(friend.name)
        }
      }
      return friendByStat;
};
  console.log(getFriendsByStatus(friends));