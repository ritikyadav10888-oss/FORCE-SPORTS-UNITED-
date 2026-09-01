export async function submitWebsiteForm({
  localApiPath,
  localInit,
}: {
  localApiPath: string;
  localInit: RequestInit;
  fields?: Record<string, string>;
  file?: { field: string; blob: Blob; filename: string };
}) {
  const res = await fetch(localApiPath, localInit);
  if (!res.ok) throw new Error("Request failed");
}
