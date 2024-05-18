import ProfileReviewBody from "../ProfileReviewBody/ProfileReviewBody";
import Review from "../ReviewAndRating/Review";
import "./ProfileReviewPage.css";

const ProfileReviewPage = () => {
  return (
    <>
    <div className="profileReview">
      <ProfileReviewBody/>
      <Review/>
    </div>
    </>
  )
}

export default ProfileReviewPage
