//import discord.js
import { Client } from 'discord.js';
const client = new Client();
let thanos = client.users.fetch('841725452296781824');
thanos.then(function(result1) {
    let avatarURL = thanos.displayAvatarURL();
    alert(avatarURL);
});
