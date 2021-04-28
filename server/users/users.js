let users = [];

const addUser = (user) => {
    // check existting
    const existingIndex = users.findIndex(currentUser => {
        return currentUser.username === user.username
    })
    if (existingIndex !== -1) {
        return users[existingIndex];
    }
    users.push(user);
    return user;
}
const removeUser = (username) => {
    const index = users.findIndex(user => {
        return user.username === username
    });
    return users.splice(index, 1);
}
const getUser = (username) => {
    const index = users.findIndex(user => {
        return user.username === username
    });
    return users[index];
}
const getUserInRoom = (room) => {
    const usersInRoom = users.filter(currentUser => {
        return currentUser.room === room;
    })
    return usersInRoom;
}

module.exports = {addUser, removeUser, getUser, getUserInRoom}