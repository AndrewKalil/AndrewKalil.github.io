import { ProfileApi } from "../../api/profile";

const profileApi = new ProfileApi("profile");

// export const setProfile = () => ProfileApi.put(Profile);

export const getProfile = () => profileApi.getProfile();
