export default (): { PORT: number } => {
  return { PORT: process.env.PORT ? Number(process.env.PORT) : 3000 };
}