export const getLengthIndicators = (minutes = 0) => {
  const base = minutes < 30 ? 5 : 10;
  const icon = minutes < 30 ? "🍺" : "🍻";
  const increments = Math.round(minutes / base) || 1;
  return Array(increments).fill(icon);
}