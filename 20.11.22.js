// spread i rest
const numbers = [1,6,8,10,54,3].concat([5,4], [63,11]);
const numbers1 = [1,6,8,10,54,3, ...[5,4], ...[63,11]];
console.log(numbers);
console.log(numbers1);



const temps = [18,14,12,21,17,29,24];
const lowestTemp = Math.min(...temps)
const hightTemp = Math.max(...temps)
console.log(lowestTemp);
console.log(hightTemp);



// const a = [
// {x: 1},
// {y: 2},
// {z: 3}
// ];
// const b = [...a];
// console.log('a:', a);
// console.log('b:', b);



const a = {x: 1, y: 2};
const b = {x: 0, z: 3};
// const c = Object.assign({}, a, b)
const c = {...a, f: 5, ...b, g: 28}
console.log(c);



const defaultSettings = {
    theme : 'light',
    showNotifications: true,
    hideSidebar: false,
};
const userSettings = {
    showNotifications: false,
    hideSidebar: true,
};
const finalSettings = {
    ...defaultSettings,
    ...userSettings
}
console.log(finalSettings);

// Диструктирізація

const playlist = {
    name: 'Мій супер плейлист',
    reating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],
    trackCount: 3,
};
console.log(
    playlist.name,
    playlist.reating,
    playlist.tracks,
    playlist.trackCount
);
const { name, reating, tracks, trackCount} = playlist;
console.log(
    name,
    reacting,
    tracks,
    trackCount
);