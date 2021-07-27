import { enableStaticRendering } from "mobx-react";
import User from "./user";

const isServer = typeof window === "undefined";
enableStaticRendering(isServer);

export default function initializeStore(initialData = { postStore: {} }) {
  return { User };
}
