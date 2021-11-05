export function formatAPIResponse(msg: string, payload: object | null = null): any {
  const sendObj = {
    msg,
    payload,
  };
  return sendObj;
}