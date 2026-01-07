import { redirect } from "next/navigation";

export default function ET() {
  redirect(process.env.BOOKING_PAGE || "https://calendar.app.google/aHackGAhEtDC9EAW9");
}
