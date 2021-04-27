import { Firestore } from "@google-cloud/firestore";
import { Request, Response } from "express";
import { Availability } from "../schema";

const COLLECTION_NAME = "menu";

interface MenuInput {
  name: string;
  description?: string;
  availability?: Availability[];
}

export const postMenu = async (
  req: Request & { database: Firestore; userId: string },
  res: Response
) => {
  try {
    const userId = req.userId;
    const data = req.body as MenuInput;

    const db = req.database;

    const ref = await db.collection(COLLECTION_NAME).add({ ...data, userId });

    res.status(200).send(ref.id);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getMenu = async (
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

export const patchMenu = async (
  req: Request & { database: Firestore },
  res: Response
) => {
  try {
    const data = req.body as MenuInput;
    const id = req.params.id as string;

    const db = req.database;

    await db.collection(COLLECTION_NAME).doc(id).set(data);

    res.status(200).send(id);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteMenu = async (
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

export const getUserMenus = async (req, res) => {
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
