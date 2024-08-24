export default async function copyToClipboard(text: string) {
  try {
    if (typeof window.navigator.clipboard !== "undefined") {
      await window.navigator.clipboard.writeText(text);

      return true;
    }
  } catch (e) {
    console.error(e);
  }
}
