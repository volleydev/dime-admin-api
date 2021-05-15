// Here we handle all user related requests:

import { Firestore } from "@google-cloud/firestore";
import { Request, Response } from "express";

// POST:user    - Save user on new signUp
// GET:user     - Get user settings and information (will be executed after every authentication)
// PATCH:user   - Update user information including restaurant details

const COLLECTION_NAME = "user";

export const postUser = async (
  req: Request & { database: Firestore },
  res: Response
) => {
  try {
    const db = req.database;

    const ref = await db.collection(COLLECTION_NAME).add({ ...req.body });

    res.status(200).send(ref.id);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
export const getUser = async (req, res) => {
  try {
  } catch (error) {}
};

export const patchUser = async (req, res) => {
  try {
  } catch (error) {}
};
