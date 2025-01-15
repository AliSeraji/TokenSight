export const truncateAddress = (
  address: string,
  startLength: number = 6,
  endLength: number = 4
): string => {
  if (!address) return "";

  // Clean the address (remove spaces, make lowercase)
  const cleanAddress = address.trim().toLowerCase();

  // Check if address is too short to truncate
  if (cleanAddress.length <= startLength + endLength) {
    return cleanAddress;
  }

  // Extract start and end portions
  const start = cleanAddress.slice(0, startLength);
  const end = cleanAddress.slice(-endLength);

  return `${start}...${end}`;
};
