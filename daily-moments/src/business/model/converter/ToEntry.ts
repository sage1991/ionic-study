import { Entry } from "../types/Entry";
import { DocumentSnapshot, DocumentData } from "../types/Firebase";

const toEntry = (docs: DocumentSnapshot<DocumentData>) => {
  return {
    ...docs.data(), 
    id: docs.id
  } as Entry
}

export { toEntry };