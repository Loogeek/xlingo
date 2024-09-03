import { FeedWrapper } from "@/components/FeedWrapper";
import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import { getUnits, getUserProgress } from "@/../db/queries";
import { redirect } from "next/navigation";
import { Header } from "./header";

const LearnPage = async () => {
  const [userProgress, units] = await Promise.all([
    getUserProgress(),
    getUnits(),
  ]);
  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex  gap-[48px] px-6">
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {JSON.stringify(units)}
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
        />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
