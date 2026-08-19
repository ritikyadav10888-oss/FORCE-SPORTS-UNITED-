const ALLOWED: Record<string, string[]> = {
  opl: [],
};

export async function listLocalMedia(folder: string) {
  return ALLOWED[folder] ? [...ALLOWED[folder]] : [];
}
