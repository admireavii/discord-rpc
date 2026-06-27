const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

// Replace these values with your exact setup details
const APPLICATION_ID = process.env.APP_ID; 

client.on('ready', () => {
    client.setActivity({
        details: "cutie :3",
        state: "listening",
        largeImageKey: "avatr", 
        largeImageText: "cute",
        buttons: [{ label: "trading table <3", url: "https://discord.gg/57HHkVu6b" }]
    });
    console.log('Your 24/7 custom status is now live!');
});

// Log in using your developer token safely stored in environment variables
client.login({ clientId: APPLICATION_ID }).catch(console.error);
