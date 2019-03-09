import ProfileContent from "../components/ProfileContent";
import IndexController from "./section/IndexController";


class ProfilePage extends IndexController{
    constructor() {
        super(ProfileContent);
    }

}

export default ProfilePage;