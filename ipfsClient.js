import { create as ipfsHttpClient } from "ipfs-http-client";

const ipfs = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

export default ipfs;
