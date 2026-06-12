import { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// IMPORTANT SECURITY WARNING: 
// Do not expose your Secret Access Key in the browser bundle for production!
// If you are using this in a frontend React component, anyone could see your keys.
// Ideally, use this in a backend endpoint or serverless function.

const accountId = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID;
const accessKeyId = process.env.NEXT_PUBLIC_R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.NEXT_PUBLIC_R2_SECRET_ACCESS_KEY;
const publicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: accessKeyId || "",
    secretAccessKey: secretAccessKey || "",
  },
});

// Name of your bucket
const BUCKET_NAME = "force-sports-assets";

/**
 * Uploads a file (image, video, etc) to Cloudflare R2
 * @param file The file object from an input field
 * @param folder The folder inside your bucket (default: 'assets')
 * @param fileName Optional custom name for the file. Defaults to original name.
 */
export async function uploadFileToR2(file: File, folder = "assets", fileName?: string) {
  // Combine the folder and filename (e.g., "assets/12345-image.jpg")
  const key = `${folder}/${fileName || `${Date.now()}-${file.name}`}`;
  
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: file.type,
  });

  await r2Client.send(command);
  return key; // Return the key (filename) so you can save it to your database/JSON
}

/**
 * Generates a secure temporary URL or CDN URL to download/display a file (video/image)
 * @param key The filename/key of the file in R2 (include the folder, e.g., "assets/video.mp4")
 * @param expiresIn Time in seconds until the link expires (default: 1 hour)
 */
export async function getFileUrlFromR2(key: string, expiresIn = 3600) {
  // 1. Prioritize Public CDN / Custom Domain if provided
  if (publicUrl) {
    const base = publicUrl.endsWith('/') ? publicUrl.slice(0, -1) : publicUrl;
    // We encode the key (except for the slashes) to handle spaces in folder names
    const encodedKey = key.split('/').map(part => encodeURIComponent(part)).join('/');
    return `${base}/${encodedKey}`;
  }

  // 2. Fallback to S3 Presigned URL (slower, expires)
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  // Generates a URL that is valid for the specified time
  const url = await getSignedUrl(r2Client, command, { expiresIn });
  return url;
}

const folderCache = new Map<string, { keys: string[], timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours

/**
 * Lists all files (images, videos) inside a specific folder in your bucket
 * @param folder The folder name (e.g., "FR. CRCE ALUMNI SPORTS LEA")
 */
export async function listFilesInFolder(folder: string) {
  // 1. Check in-memory cache first
  const cached = folderCache.get(folder);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.keys;
  }

  // 2. Check localStorage cache to survive page reloads
  const cacheKey = `r2_folder_v2_${folder}`;
  try {
    const localCachedStr = localStorage.getItem(cacheKey);
    if (localCachedStr) {
      const localCached = JSON.parse(localCachedStr);
      if (Date.now() - localCached.timestamp < CACHE_TTL) {
        // Restore to memory cache
        folderCache.set(folder, localCached);
        return localCached.keys;
      }
    }
  } catch (e) {
    console.warn("Failed to read from localStorage cache", e);
  }

  // Ensure folder string ends with a slash so it only matches contents inside the folder
  const prefix = folder.endsWith("/") ? folder : `${folder}/`;

  const command = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: prefix,
  });

  const response = await r2Client.send(command);
  
  // Return the list of keys (file paths)
  const keys = response.Contents?.map((item) => item.Key as string) || [];
  
  // Save to memory cache
  const cacheData = { keys, timestamp: Date.now() };
  folderCache.set(folder, cacheData);
  
  // Save to localStorage cache
  try {
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
  } catch (e) {
    console.warn("Failed to save to localStorage cache", e);
  }
  
  return keys;
}
