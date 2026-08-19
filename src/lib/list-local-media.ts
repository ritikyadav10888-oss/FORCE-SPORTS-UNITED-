import { readdir } from "fs/promises";
import { join } from "path";

const ALLOWED_FOLDERS = new Set(["opl", "monsoon match"]);
const MEDIA_EXT = /\.(jpe?g|png|webp|gif|mp4|mov|webm)$/i;

async function walkMedia(dir: string, urlPrefix: string): Promise<string[]> {
  const files: string[] = [];
  let entries;

  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return files;
  }

  entries.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;

    if (entry.isDirectory()) {
      files.push(...await walkMedia(join(dir, entry.name), `${urlPrefix}/${encodeURIComponent(entry.name)}`));
      continue;
    }

    if (MEDIA_EXT.test(entry.name)) {
      files.push(`${urlPrefix}/${encodeURIComponent(entry.name)}`);
    }
  }

  return files;
}

export async function listLocalMedia(folder: string) {
  if (!ALLOWED_FOLDERS.has(folder)) {
    return [] as string[];
  }

  const encodedFolder = folder.split("/").map(encodeURIComponent).join("/");
  return walkMedia(join(process.cwd(), "public", folder), `/${encodedFolder}`);
}
