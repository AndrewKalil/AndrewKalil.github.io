import { Api } from "..";
import { getProfileFromFirebase } from "../../services/firebase";
import { Profile } from "../../types/profile";

export class ProfileApi extends Api<Profile> {
  getProfile = async () => getProfileFromFirebase<Profile>();
}
