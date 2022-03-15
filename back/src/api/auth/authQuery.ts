export const qInsertToken = (userID: number, refreshToken: string) => `
INSERT INTO Auth.Token
(
  UserID,
  Token,
  CreateDate,
  UpdateDate
)
VALUES
(
  ${userID},
  ${refreshToken},
  NOW(),
  NOW()
)
ON DUPLICATE KEY 
UPDATE  Token = ${refreshToken},
        UpdateDate = NOW();
`;
