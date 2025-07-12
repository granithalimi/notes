export interface SessionPayload {
  userId: string;
  expiresAt: Date;
  [key: string]: any;
}
