import React, { useState } from "react";
import { TextInputField, Button, Pane, Text } from "evergreen-ui";

const Decryption = () => {
  const [s, setS] = useState("");
  const [decryptedMsg, setDecryptedMsg] = useState("");

  const crypto = require("crypto-js");
  const c_iv = crypto.lib.WordArray.random(16);
  const msg = "flag={d1FFIeh3lLmAn}";
  const enc_flag = encryptMessage(msg);

  // once db is setup, through the flag at an endpoint so its not in sourcecode, then fetch at start
  // using useEffect
  // alice priv key = 15, pub key = 6
  // bob priv key = 13, pub key = 12

  const handleDecrypt = () => {
    const decrypted = decryptMessage(enc_flag, s);
    setDecryptedMsg(decrypted);
  };

  function decryptMessage(enc_msg, s) {
    console.log(enc_msg);
    // Step 1: Convert number s to bytes
    const sBytes = crypto.enc.Utf8.parse(s.toString());

    // Step 2: Generate the cipher key using SHA256 hashing
    const hasher = crypto.algo.SHA256.create();
    hasher.update(sBytes);
    const cipherKey = hasher
      .finalize()
      .toString(crypto.enc.Hex)
      .substring(0, 32);

    // Step 3: Encrypt the message using AES encryption
    const decrypted = crypto.AES.decrypt(
      enc_msg,
      crypto.enc.Hex.parse(cipherKey),
      {
        iv: c_iv,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7,
      }
    );
    return decrypted.toString(crypto.enc.Utf8);
  }

  function encryptMessage(msg) {
    const num = 10;
    // Step 1: Convert number s to bytes
    const numBytes = crypto.enc.Utf8.parse(num.toString());

    // Step 2: Generate the cipher key using SHA256 hashing
    const hasher = crypto.algo.SHA256.create();
    hasher.update(numBytes);
    const cipherKey = hasher
      .finalize()
      .toString(crypto.enc.Hex)
      .substring(0, 32);

    // Step 3: Encrypt the message using AES encryption
    const encrypted = crypto.AES.encrypt(msg, crypto.enc.Hex.parse(cipherKey), {
      iv: c_iv,
      mode: crypto.mode.CBC,
      padding: crypto.pad.Pkcs7,
    });

    return encrypted.toString();
  }

  return (
    <Pane>
      <Pane display="flex" alignItems="center" justifyContent="center">
        <Text marginRight={8}>Enter value of s:</Text>
        <TextInputField marginTop={15} onChange={(e) => setS(e.target.value)} />
      </Pane>
      <Pane display="flex" alignItems="center" justifyContent="center">
        <Button onClick={handleDecrypt}>Decrypt</Button>
        {decryptedMsg && (
          <Pane>
            <Text padding={10}>{decryptedMsg}</Text>
          </Pane>
        )}
      </Pane>
    </Pane>
  );
};

export default Decryption;
