type ID = number;
type PostId = number | string;
type Coords = [number, number];

const userId: ID = 5;
console.log(userId);

const postId: PostId = "f6ff99556";
console.log(postId);

const coords: Coords = [50.4501, 30.5234];
console.log(coords);

// Union
type ReqStatus = "request" | "success" | "error";

const requestStatus: ReqStatus = "success";

console.log(requestStatus);

export {};
