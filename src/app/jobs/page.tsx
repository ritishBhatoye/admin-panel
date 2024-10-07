import { JobTable, Job } from '@/components/layout/JobTable';
import DashboardLayout from "../dashboard/layout";

const jobs: Job[] = [
  {
    id: "TASK-8782",
    title: "You can't compress the program without quantifying the open-source SSD pixel!",
    status: "in progress",
    priority: "medium",
    type: "documentation",
  },
  {
    id: "TASK-7878",
    title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "backlog",
    priority: "medium",
    type: "documentation",
  },
  {
    id: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    status: "todo",
    priority: "high",
    type: "bug",
  },
  {
    id: "TASK-5562",
    title: "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    status: "backlog",
    priority: "medium",
    type: "feature",
  },
  {
    id: "TASK-8686",
    title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "canceled",
    priority: "medium",
    type: "feature",
  },
  // Add more job data as needed
];

export default function JobsPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
        </div>
        <div className="hidden md:block">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <h2 className="text-lg font-semibold">Here's a list of your tasks for this month!</h2>
            </div>
          </div>
        </div>
        <JobTable jobs={jobs} />
      </div>
    </DashboardLayout>
  );
}