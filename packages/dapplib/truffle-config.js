require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain hole inflict arena bridge giggle'; 
let testAccounts = [
"0xec4399c9f0ae894d6ceacc494279a3565291d9b54b4455ca40677efe33a054ed",
"0x25625904ffc2ac46373e173d647691ac716cf9f5a459778b791b92811a709f11",
"0x52c42e453d3fc1cbb57b3ef27e098ad0574cc1f10a2aaa492e525786433e39b6",
"0x3c4c1bef26bb60293bbfd0aed5bec28704416b94b591113874f785b382ef1eb3",
"0xbc60a94e39df440cd8c958c1e6aa9d4d2d5df8150c381fa0e4e2c024e6a642d3",
"0x58b7189b130be78d6a59d2ae3d86554c9822cef69e5a8cb47187d5d86ea78d33",
"0x7289f02cc7bf597a982a588690ec0bdbbfd6b34eaac0176980ea48d7dce12be5",
"0x1cdf1f80dfafda9431131cddd4f1708c796ce1472486fc2f7cd5255faef11ea1",
"0x326e35c9e7bf23d5c3516c163ccaa84689016a60d7ee2ccb23c06228c1d2041f",
"0x780d842d683020d7877e97f56bc998b0724780c655ba9634bbfb035c7889f9e6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
