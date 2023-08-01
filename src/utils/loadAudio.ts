// https://stackoverflow.com/a/56711916/19449790
// Allows to stop requesting the same files over and over again
// (e.g. for sounds that play on mouseenter caused many HTTP requests and consumed some Internet bandwidth)
async function loadAudio(url: string) {
  // not using try, catch, because I request only local files and they are guaranteed to fetch
  const response = await fetch(url);
  const blob = await response.blob();
  const fileBlob = URL.createObjectURL(blob);
  const audio = new Audio(fileBlob);
  return audio;
}

export default loadAudio;
