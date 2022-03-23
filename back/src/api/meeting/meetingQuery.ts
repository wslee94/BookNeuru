import { execQuery } from "library/sql";
import mysql from "mysql2/promise";
import ResponseJson from "library/response";
import { checkIsNumber } from "helper/func";

const qInsertMeeting = (
  title: string,
  category: string,
  location: string,
  meetingImageURL: string,
  description: string,
  userID: number,
) => `
INSERT INTO Book.Meeting
(
  Title,
  Category, 
  Location,
  MeetingImageURL,
  Description,
  CreateDate,
  CreateUserID,
  UpdateDate,
  UpdateUserID
)
VALUES
(
  ${title},
  ${category},
  ${location},
  ${meetingImageURL},
  ${description},
  NOW(),
  ${userID},
  NOW(),
  ${userID}
);
`;

const qInsertMeetingParticipant = (userID: number, isOwner: boolean) => `
INSERT INTO Book.MeetingParticipant
(
  MeetingID,
  UserID,
  IsOwner,
  CreateDate,
  CreateUserID,
  UpdateDate,
  UpdateUserID
)
VALUES
(
  LAST_INSERT_ID(),
  ${userID},
  ${isOwner},
  NOW(),
  ${userID},
  NOW(),
  ${userID}
);
`;

const qUpdateMeeting = (
  meetingID: string,
  title: string,
  category: string,
  location: string,
  meetingImageURL: string,
  description: string,
  userID: number,
) => `
UPDATE  Book.Meeting
SET     Title=${title},
        Category=${category}, 
        Location=${location},
        MeetingImageURL=${meetingImageURL},
        Description=${description},
        UpdateDate=NOW(),
        UpdateUserID=${userID}
WHERE   MeetingID=${meetingID};
`;

const qSelectMeetings = (userID: number) => `
SELECT  M.MeetingID AS meetingID,
        M.Title AS title,
        M.Location AS location,
        M.MeetingImageURL AS meetingImangeURL
FROM    Book.Meeting M
INNER JOIN Book.MeetingParticipant MP
  ON  M.MeetingID = MP.MeetingID
  AND MP.UserID = ${userID}
ORDER BY MP.UpdateDate DESC;
`;

const qSelectMeeting = (meetingID: string) => `
SELECT  M.MeetingID AS meetingID,
        M.Title AS title,
        M.Category AS category, 
        M.Location AS location,
        M.MeetingImageURL AS meetingImangeURL,
        M.Description AS description,
        GROUP_CONCAT(U.Name) AS userNames
FROM    Book.Meeting M
INNER JOIN Book.MeetingParticipant MP
  ON  M.MeetingID = MP.MeetingID
INNER JOIN Auth.User U
  ON  MP.UserID = U.UserID
WHERE M.MeetingID = ${meetingID}
GROUP BY M.MeetingID
`;

export const insertMeeting = async (conn: mysql.PoolConnection, param: any, userInfo: any) => {
  const { title, category, location, meetingImageURL, description } = param;
  const { userID } = userInfo;
  try {
    await conn.beginTransaction();

    await execQuery(conn, qInsertMeeting(title, category, location, meetingImageURL, description, userID));
    await execQuery(conn, qInsertMeetingParticipant(userID, true));

    await conn.commit();
    return new ResponseJson("SUCCESS", null, "");
  } catch (error) {
    conn.rollback();
    throw error;
  }
};

export const updateMeeting = async (conn: mysql.PoolConnection, param: any, userInfo: any) => {
  const { userID } = userInfo;
  const { id } = param.original;
  const { title, category, location, meetingImageURL, description } = param;

  if (!checkIsNumber(id)) {
    return new ResponseJson("FAIL", null, "잘못된 형식의 요청으로 인해 데이터를 불러올 수 없습니다.");
  }

  await execQuery(conn, qUpdateMeeting(id, title, category, location, meetingImageURL, description, userID));

  return new ResponseJson("SUCCESS", null, "");
};

export const selectMeetings = async (conn: mysql.PoolConnection, param: any, userInfo: any) => {
  const { userID } = userInfo;
  const [result] = await execQuery(conn, qSelectMeetings(userID));

  return new ResponseJson("SUCCESS", result, "");
};

export const selectMeeting = async (conn: mysql.PoolConnection, param: any) => {
  const { id } = param.original;

  if (!checkIsNumber(id)) {
    return new ResponseJson("FAIL", null, "잘못된 형식의 요청으로 인해 데이터를 불러올 수 없습니다.");
  }
  const [result] = await execQuery(conn, qSelectMeeting(id));

  return new ResponseJson("SUCCESS", result, "");
};
