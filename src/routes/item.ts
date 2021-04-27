import { Firestore } from "@google-cloud/firestore";
import { Request, Response } from "express";

const COLLECTION_NAME = "item";

interface ItemInput {
  name: string;
  description?: string;
}

export const postItem = async (
  req: Request & { database: Firestore },
  res: Response
) => {
  try {
    const data = req.body as ItemInput;

    const db = req.database;

    const ref = await db.collection(COLLECTION_NAME).add(data);

    res.status(200).send(ref.id);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getItem = async (
  req: Request & { database: Firestore },
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const db = req.database;

    const doc = await db.collection(COLLECTION_NAME).doc(id).get();

    res.status(200).send(doc.data());
  } catch (error) {
    res.status(400).send(error);
  }
};

export const patchItem = async (
  req: Request & { database: Firestore },
  res: Response
) => {
  try {
    const data = req.body as ItemInput;
    const id = req.params.id as string;

    const db = req.database;

    await db.collection(COLLECTION_NAME).doc(id).set(data);

    res.status(200).send(id);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteItem = async (
  req: Request & { database: Firestore },
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const db = req.database;

    await db.collection(COLLECTION_NAME).doc(id).delete();

    res.status(200).send(id);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUserItems = async (req, res) => {
  try {
    const id = req.params.id;

    const db = req.database;

    const snapshot = await db
      .collection(COLLECTION_NAME)
      .where("userId", "==", id)
      .get();

    const data = snapshot.map((doc) => doc.data());
    res.status(200).send({ items: data });
  } catch (error) {
    res.status(400).send(error);
  }
};
