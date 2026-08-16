export interface UpcomingMeeting {
  id: string;
  title: string;
  date: {
    day: string;
    month: string;
  };
  time: string;
  participants: string;
}
