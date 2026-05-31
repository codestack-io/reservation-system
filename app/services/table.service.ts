import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Table } from "@/types/table.type";

const COLLECTION = "tables";

export async function getTables() {
  const client = await clientPromise;

  const db = client.db();

  return db
    .collection(COLLECTION)
    .find({})
    .sort({ tableNumber: 1 })
    .toArray();
}

export async function getTableById(id: string) {
  const client = await clientPromise;

  const db = client.db();

  return db.collection(COLLECTION).findOne({
    _id: new ObjectId(id),
  });
}

export async function createTable(data: Table) {
  const client = await clientPromise;

  const db = client.db();

  // Ensure _id (if provided) is an ObjectId
  const { _id, ...rest } = data as Partial<Table>;
  const doc: Omit<Partial<Table>, "_id"> & { createdAt: Date; updatedAt: Date; _id?: ObjectId } = {
    ...rest,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  if (_id) {
    doc._id = new ObjectId(_id);
  }

  return db.collection(COLLECTION).insertOne(doc);
}

export async function updateTable(
  id: string,
  data: Partial<Table>
) {
  const client = await clientPromise;

  const db = client.db();

  return db.collection(COLLECTION).updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        ...data,
        updatedAt: new Date(),
      },
    }
  );
}

export async function deleteTable(id: string) {
  const client = await clientPromise;

  const db = client.db();

  return db.collection(COLLECTION).deleteOne({
    _id: new ObjectId(id),
  });
}