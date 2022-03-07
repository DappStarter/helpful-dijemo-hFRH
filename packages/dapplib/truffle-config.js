require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth museum coil grace hidden slot genius'; 
let testAccounts = [
"0x0b27c8b29f7f7781fbbe38a693b103ff5d31771a25b5e6621fade3bce09424d0",
"0xb857b305a231447e3892eac5c834c0577726990a3f414c885694902eee5046c9",
"0x4d73bc98ae89de371dc07888973421226c718778c9b859ce7d5c923ccfa554da",
"0x49b95a1b91d874739d15ac49cb46511fe2e1253b5258c4cfcc5d878b6879f87d",
"0x038d95e551b67ee6642648cda112a1130db8b4a6748c8185e0df765ed88e4fe3",
"0xf6704d9006ec06e78d470639ac561eb496de3fef277528cce9a6778dc832d2e0",
"0x7339618095c2a5035b30e8d9151cc1c0e0f6844d36e04d7522a4e7575df4006c",
"0x200eaed0860e79e0b580ef246f57515f15b33d0dc0fab6657ac1c04d997ab649",
"0x7aceb13706c8397b2e7b06dc82a211da2dcc9153b689243c59ddc1a1698308e4",
"0xfb494ba5e20d9b1473cd35faef5641d9572c029bcf7be95b28b552572b218dc8"
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
            version: '^0.8.0'
        }
    }
};

