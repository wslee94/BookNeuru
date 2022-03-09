type statusType = "FAIL" | "SUCCESS";
type dataType = object | null;
type messageType = string;

export default class Response {
  status: statusType;
  data: dataType;
  message: messageType;

  constructor(status: statusType, data: dataType, message: messageType) {
    this.status = status;
    this.data = data;
    this.message = message;
  }
}
