export default (): {
  TRANSPORT_MAIL: string;
  TRANSPORT_PASSWORD: string;
  MAIL_RECEIVER: string;
} => {
  return {
    TRANSPORT_MAIL: process.env.TRANSPORT_MAIL ?? '',
    TRANSPORT_PASSWORD: process.env.TRANSPORT_PASSWORD ?? '',
    MAIL_RECEIVER: process.env.MAIL_RECEIVER ?? '',
  };
};
