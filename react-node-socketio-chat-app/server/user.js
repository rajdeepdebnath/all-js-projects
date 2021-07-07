const users = [];

const addUser = (user) => {
    let existingUser = users.find(u => u.id === user.id);
    if(existingUser)
        return existingUser;

    users.push(user);
    return 1;
}

const getUser = (userid) => {
    let user = users.find(u => u.id === userid);
    if(!user)
        return -1;

    return user;
}

const removeUser = (userid) => {
    let index = users.findIndex(u => u.id === userid)
    if(index < 0)
        return -1;

    let user = users[index];
    users.splice(index,1);
    return user;
}

module.exports  = { addUser, removeUser, getUser }