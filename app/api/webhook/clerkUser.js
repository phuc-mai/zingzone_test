import User from "@lib/models/User";

export const createUser = async (id, username, first_name, last_name, image_url, email_addresses) => {
  try {
    await connectToDB();

    const newUser = new User({
      clerkId: id,
      username,
      firstName: first_name,
      lastName: last_name,
      profilePhoto: image_url,
    });

    await newUser.save();

    return newUser;
  } catch (err) {
    console.log(err)
    throw new Error(`Failed to create user: ${err.message}`);
  }
}