"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut, auth } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must Log in to create a reservation");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    guestsNum: Number(formData.get("guestsNum")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };
  console.log(newBooking);
  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Failed to create reservation");
  revalidatePath(`/cabin/${bookingData.cabinId}`);
  redirect("cabins/thankyou");
}

export async function updateGuestProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must Log in to update your profile");
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Invalid National ID");
  const updateData = { nationality, nationalID, countryFlag };
  console.log(updateData);

  revalidatePath("/account/profile");
  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Failed to update profile");
}

export async function deleteBooking(bookingId) {
  await new Promise((res) => setTimeout(res, 2000));
  const session = await auth();
  if (!session) throw new Error("You must Log in to delete a reservation");

  const guestBookings = await getBookings(session.user.guestId);

  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("Unauthorized to delete reservation");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Failed to delete reservation");
  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  const bookingId = Number(formData.get("bookingId"));
  //1)Authenticating the user
  const session = await auth();
  if (!session) throw new Error("You must Log in to update a reservation");
  //2)Checking if the user is authorized to update the reservation

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId));

  //3)building  the Data reservation
  const updateData = {
    guestsNum: Number(formData.get("guestsNum")),
    observations: formData.get("observations").slice(0, 1000),
  };

  //4)Mutating the data
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) throw new Error("Failed to update reservation");
  //5)redirecting the user to the reservations page
  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
