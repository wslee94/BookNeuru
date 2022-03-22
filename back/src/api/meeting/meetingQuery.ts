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

  if (!checkIsNumber(id)) return new ResponseJson("FAIL", null, "ㄴㄴㄴ");

  await execQuery(conn, qUpdateMeeting(id, title, category, location, meetingImageURL, description, userID));

  return new ResponseJson("SUCCESS", null, "");
};
