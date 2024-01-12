export default function decodeJwt(access_token: null | string) {
  try {
    if (access_token) {
      const base64Payload = access_token.split(".")[1];
      const payloadBuffer = window.atob(base64Payload);
      return JSON.parse(payloadBuffer.toString());
    } else {
      return { exp: 0 };
    }
  } catch (err) {
    if (typeof err === "string") {
      throw Error(err);
    }
  }
}
