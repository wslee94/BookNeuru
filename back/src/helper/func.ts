export const checkIsNumber = (value: any) => !Number.isNaN(Number(value));

export function checkBlank(value: string) {
  if (!value) return true;
  if (typeof value !== "string") return true;
  if (value.trim() === "") return true;
  return false;
}
