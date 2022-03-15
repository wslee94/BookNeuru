export const qUpsertToken = (userID: number, refreshToken: string) => `
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

export const qIsValidToken = (refreshToken: string) => `
SELECT EXISTS (SELECT UserID FROM Auth.Token WHERE Token = ${refreshToken}) AS isValid;
`;

export const qSelectUserInfoFromRefreshToken = (refreshToken: string) => `
SELECT  U.UserID AS userID,
        U.Email AS email,
        U.Name AS name
FROM    Auth.Token T
INNER JOIN Auth.User U
  ON  T.UserID = U.UserID
WHERE T.Token = ${refreshToken};
`;
