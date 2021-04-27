// need an authenticated user
//
import admin from "firebase-admin";
import fetch from "node-fetch";
import { initAuthentication } from "../services/authentication";

const API_KEY = "AIzaSyCs3r0I_8EbyZFyE2xqy2sd_AsQw1i5Rjs";

const AUTH_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_KEY}`;

export const TEST_USER_ID = "test_user_id";

export const getIdToken = async () => {
  try {
    const token = await admin.auth().createCustomToken(TEST_USER_ID);
    const res = await fetch(AUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        returnSecureToken: true,
      }),
    });
    const text = await res.text();
    const data = JSON.parse(text);

    return data.idToken;
  } catch (error) {
    return error;
  }
};
