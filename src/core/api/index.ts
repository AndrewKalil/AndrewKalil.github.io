import { addCollectionAndDocuments, getDocuments } from "../services/firebase";
import { BaseType } from "../types";

export class Api<T> {
  _endpoint: string;

  constructor(endpoint: string) {
    this._endpoint = endpoint;
  }

  get = async () => await getDocuments<T>(this._endpoint);

  async put(objectsToAdd: (T & BaseType)[]) {
    await addCollectionAndDocuments<T & BaseType>(this._endpoint, objectsToAdd);
  }
}
