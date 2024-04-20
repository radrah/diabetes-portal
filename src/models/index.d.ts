import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum FriendshipStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED"
}

export enum WorkoutType {
  WALKING = "WALKING",
  RUNNING = "RUNNING",
  SWIMMING = "SWIMMING",
  JOGGING = "JOGGING"
}

export enum PostStatus {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED"
}

export enum PostType {
  TEXT = "TEXT",
  TEXT_IMAGE = "TEXT_IMAGE"
}

export enum ChatItemType {
  TEXT = "TEXT",
  IMAGE = "IMAGE"
}

export enum EventStatus {
  UNDECIDED = "UNDECIDED",
  GOING = "GOING",
  NOT_GOING = "NOT_GOING"
}

export declare class EventMembers {
  readonly memberId: string;
  readonly status: EventStatus | keyof typeof EventStatus;
  constructor(init: ModelInit<EventMembers>);
}

type DashboardDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FriendshipMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PatientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkoutMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkoutPlanMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DoctorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class DashboardData {
  readonly id: string;
  readonly patientsActive?: number | null;
  readonly workoutsInProgress?: number | null;
  readonly workoutsCompleted?: number | null;
  readonly totalPatients?: number | null;
  readonly feltGood?: string | null;
  readonly tooEasy?: string | null;
  readonly tooHard?: string | null;
  readonly updated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DashboardData, DashboardDataMetaData>);
  static copyOf(source: DashboardData, mutator: (draft: MutableModel<DashboardData, DashboardDataMetaData>) => MutableModel<DashboardData, DashboardDataMetaData> | void): DashboardData;
}

export declare class Friendship {
  readonly id: string;
  readonly friend1?: Patient | null;
  readonly friend2?: Patient | null;
  readonly status: FriendshipStatus | keyof typeof FriendshipStatus;
  readonly dateAccepted?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly friendshipFriend1Id?: string | null;
  readonly friendshipFriend2Id?: string | null;
  constructor(init: ModelInit<Friendship, FriendshipMetaData>);
  static copyOf(source: Friendship, mutator: (draft: MutableModel<Friendship, FriendshipMetaData>) => MutableModel<Friendship, FriendshipMetaData> | void): Friendship;
}

export declare class Patient {
  readonly id: string;
  readonly userName?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly isVerified?: boolean | null;
  readonly profilePicUrl?: string | null;
  readonly email?: string | null;
  readonly createdOn?: string | null;
  readonly updatedOn?: string | null;
  readonly doctorID?: string | null;
  readonly workoutsCompleted?: Workout[] | null;
  readonly workoutPlans?: WorkoutPlan[] | null;
  readonly posts?: Post[] | null;
  readonly doctorsNotes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Patient, PatientMetaData>);
  static copyOf(source: Patient, mutator: (draft: MutableModel<Patient, PatientMetaData>) => MutableModel<Patient, PatientMetaData> | void): Patient;
}

export declare class Workout {
  readonly id: string;
  readonly startedOn?: string | null;
  readonly completedOn?: string | null;
  readonly workoutType: WorkoutType | keyof typeof WorkoutType;
  readonly peakHR?: number | null;
  readonly averageHR?: number | null;
  readonly heartRates?: (number | null)[] | null;
  readonly caloriesBurned?: string | null;
  readonly glucoseLevel?: string | null;
  readonly comments?: string | null;
  readonly patient: Patient;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Workout, WorkoutMetaData>);
  static copyOf(source: Workout, mutator: (draft: MutableModel<Workout, WorkoutMetaData>) => MutableModel<Workout, WorkoutMetaData> | void): Workout;
}

export declare class WorkoutPlan {
  readonly id: string;
  readonly type: WorkoutType | keyof typeof WorkoutType;
  readonly time: string;
  readonly day: number;
  readonly reps: number;
  readonly restLength: number;
  readonly repeat: boolean;
  readonly patient: Patient;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WorkoutPlan, WorkoutPlanMetaData>);
  static copyOf(source: WorkoutPlan, mutator: (draft: MutableModel<WorkoutPlan, WorkoutPlanMetaData>) => MutableModel<WorkoutPlan, WorkoutPlanMetaData> | void): WorkoutPlan;
}

export declare class Post {
  readonly id: string;
  readonly postImageUrl?: string | null;
  readonly status?: PostStatus | keyof typeof PostStatus | null;
  readonly createdOn?: string | null;
  readonly updatedOn?: string | null;
  readonly type?: PostType | keyof typeof PostType | null;
  readonly likes?: number | null;
  readonly comments?: (Comment | null)[] | null;
  readonly content?: string | null;
  readonly patientID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly createdOn?: string | null;
  readonly updatedOn?: string | null;
  readonly userId?: string | null;
  readonly commentText?: string | null;
  readonly postID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class ChatItem {
  readonly id: string;
  readonly senderid?: string | null;
  readonly recieveid?: string | null;
  readonly message?: string | null;
  readonly imageUrl?: string | null;
  readonly itemType?: ChatItemType | keyof typeof ChatItemType | null;
  readonly createdOn?: string | null;
  readonly chatID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ChatItem, ChatItemMetaData>);
  static copyOf(source: ChatItem, mutator: (draft: MutableModel<ChatItem, ChatItemMetaData>) => MutableModel<ChatItem, ChatItemMetaData> | void): ChatItem;
}

export declare class Chat {
  readonly id: string;
  readonly recieveid?: string | null;
  readonly senderid?: string | null;
  readonly createdOn?: string | null;
  readonly updatedOn?: string | null;
  readonly chatItems?: (ChatItem | null)[] | null;
  readonly chatUsers?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Chat, ChatMetaData>);
  static copyOf(source: Chat, mutator: (draft: MutableModel<Chat, ChatMetaData>) => MutableModel<Chat, ChatMetaData> | void): Chat;
}

export declare class Doctor {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly regNumber?: string | null;
  readonly patients?: (Patient | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Doctor, DoctorMetaData>);
  static copyOf(source: Doctor, mutator: (draft: MutableModel<Doctor, DoctorMetaData>) => MutableModel<Doctor, DoctorMetaData> | void): Doctor;
}

export declare class Event {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly location: string;
  readonly description: string;
  readonly members: EventMembers[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}