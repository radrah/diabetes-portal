// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FriendshipStatus = {
  "PENDING": "PENDING",
  "ACCEPTED": "ACCEPTED"
};

const WorkoutType = {
  "WALKING": "WALKING",
  "RUNNING": "RUNNING",
  "SWIMMING": "SWIMMING",
  "JOGGING": "JOGGING"
};

const PostStatus = {
  "CREATED": "CREATED",
  "UPDATED": "UPDATED",
  "DELETED": "DELETED"
};

const PostType = {
  "TEXT": "TEXT",
  "TEXT_IMAGE": "TEXT_IMAGE"
};

const ChatItemType = {
  "TEXT": "TEXT",
  "IMAGE": "IMAGE"
};

const EventStatus = {
  "UNDECIDED": "UNDECIDED",
  "GOING": "GOING",
  "NOT_GOING": "NOT_GOING"
};

const { DashboardData, Friendship, Patient, Workout, WorkoutPlan, Post, Comment, ChatItem, Chat, Doctor, Event, EventMembers } = initSchema(schema);

export {
  DashboardData,
  Friendship,
  Patient,
  Workout,
  WorkoutPlan,
  Post,
  Comment,
  ChatItem,
  Chat,
  Doctor,
  Event,
  FriendshipStatus,
  WorkoutType,
  PostStatus,
  PostType,
  ChatItemType,
  EventStatus,
  EventMembers
};