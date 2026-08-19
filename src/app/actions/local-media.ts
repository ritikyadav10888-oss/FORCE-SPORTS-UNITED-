"use server";

import { listLocalMedia } from "@/lib/list-local-media";

export async function listLocalMediaAction(folder: string) {
  return listLocalMedia(folder);
}
