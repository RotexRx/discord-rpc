const RPC = require('discord-rpc');
const clientId = 'YOUR_APPLICATION_CLIENT_ID'; // copy application id from general page 

RPC.register(clientId);

const rpc = new RPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    console.log("author : rotexrx , runned")
    rpc.setActivity({
        details: 'Working On .....',
        state: 'Editing .....',
        startTimestamp: Date.now(),
        largeImageKey: 'largeImageKey', // Set this to your uploaded image key
        largeImageText: 'largeImageText',
        smallImageKey: 'smallImageKey', // Optional
        smallImageText: 'smallImageText', // Optional
        buttons: [
            { label: 'Button Name', url: 'Button Link' }
        ],
    });
});

rpc.login({ clientId }).catch(console.error);
