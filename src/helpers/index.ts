export const chunkArray = <T>(ar: T[], chunkSize = 3) => {
  const result = [];

  for (let i = 0; i < ar.length; i += chunkSize) {
    const chunk = ar.slice(i, i + chunkSize); // Create a new chunk
    result.push(chunk); // Add the chunk to the result
  }

  return result;
};
