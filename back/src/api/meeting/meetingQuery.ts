import { execQuery } from "library/sql";
import mysql from "mysql2/promise";
import ResponseJson from "library/response";

const qInsertMeeting = (
  title: string,
  category: string,
  location: string,
  meetingImageURL: string,
  description: string,
) => `
INSERT INTO Book.Meeting
(
  Title,
  Category, 
  Location,
  MeetingImageURL,
  Description,
  CreateDate,
  UpdateDate
)
VALUES
(
  ${title},
  ${category},
  ${location},
  ${meetingImageURL},
  ${description},
  NOW(),
  NOW()
);
`;

const qInsertMeetingParticipant = (userID: number, isOwner: boolean) => `
INSERT INTO Book.MeetingParticipant
(
  MeetingID,
  UserID,
  IsOwner,
  CreateDate,
  UpdateDate
)
VALUES
(
  LAST_INSERT_ID(),
  ${userID},
  ${isOwner},
  NOW(),
  NOW()
);
`;

export const insertMeeting = async (conn: mysql.PoolConnection, param: any, userInfo: any) => {
  const { title, category, location, meetingImageURL, description } = param;
  const { userID } = userInfo;
  try {
    await conn.beginTransaction();

    await execQuery(conn, qInsertMeeting(title, category, location, meetingImageURL, description));
    await execQuery(conn, qInsertMeetingParticipant(userID, true));

    await conn.commit();
    return new ResponseJson("SUCCESS", null, "");
  } catch (error) {
    conn.rollback();
    throw error;
  }
};
