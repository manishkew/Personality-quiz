import crypto from "crypto";

export function generateUserId({ name, dob, color, luckyNumber }) {
  const str = `${name}-${dob}-${color}-${luckyNumber}`;
  return crypto.createHash("sha256").update(str).digest("hex");
}
