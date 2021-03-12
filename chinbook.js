var facebookProfile = {
  name: 'Zack',
  friends: 52,
  messages: ['poop', 'hello world', 'goodbye world'],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  }
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  }
  addFriend: function () {
    facebookProfile.friends += 1;
  }
  removeFriend: function () {
    facebookProfile.friends -= 1;
  }